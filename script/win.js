document.addEventListener("DOMContentLoaded", function () {
  const bulle = document.getElementById("bulleBD");
  bulle.classList.remove("hidden");

  // Ajouter l'événement pour fermer la bulle
  document.querySelector(".close").addEventListener("click", function () {
    bulle.classList.add("hidden");
  });
});

//Activation et désactivation du canvas
document.getElementById("toggleCanvasButton").addEventListener("click", function () {
  var canvas = document.getElementById("canvas"); // Correction de l'identifiant
  if (canvas.style.display === "none" || canvas.style.display === "") {
    canvas.style.display = "block"; // Afficher le canvas
    this.textContent = "Arrêter la fête";
  } else {
    canvas.style.display = "none"; // Cacher le canvas
    this.textContent = "Démarrer la fête";
  }
});

//test origine ------------------------------------------------------------------------

window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

// now we will setup our basic variables for the demo
var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  // full screen dimensions
  cw = window.innerWidth,
  ch = window.innerHeight,
  // firework collection
  fireworks = [],
  // particle collection
  particles = [],
  // starting hue
  hue = 120,
  // when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
  limiterTotal = 5,
  limiterTick = 0,
  // this will time the auto launches of fireworks, one launch per 80 loop ticks
  timerTotal = 80,
  timerTick = 0,
  mousedown = false,
  // mouse x coordinate,
  mx,
  // mouse y coordinate
  my;

// set canvas dimensions
canvas.width = cw;
canvas.height = ch;

// now we are going to setup our function placeholders for the entire demo

// get a random number within a range
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// calculate the distance between two points
function calculateDistance(p1x, p1y, p2x, p2y) {
  var xDistance = p1x - p2x,
    yDistance = p1y - p2y;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// create firework
function Firework(sx, sy, tx, ty) {
  // actual coordinates
  this.x = sx;
  this.y = sy;
  // starting coordinates
  this.sx = sx;
  this.sy = sy;
  // target coordinates
  this.tx = tx;
  this.ty = ty;
  // distance from starting point to target
  this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
  this.distanceTraveled = 0;
  // track the past coordinates of each firework to create a trail effect, increase the coordinate count to create more prominent trails
  this.coordinates = [];
  this.coordinateCount = 3;
  // populate initial coordinate collection with the current coordinates
  while (this.coordinateCount--) {
    this.coordinates.push([this.x, this.y]);
  }
  this.angle = Math.atan2(ty - sy, tx - sx);
  this.speed = 2;
  this.acceleration = 1.05;
  this.brightness = random(50, 70);
  // circle target indicator radius
  this.targetRadius = 1;
}

// update firework
Firework.prototype.update = function (index) {
  // remove last item in coordinates array
  this.coordinates.pop();
  // add current coordinates to the start of the array
  this.coordinates.unshift([this.x, this.y]);

  // cycle the circle target indicator radius
  if (this.targetRadius < 8) {
    this.targetRadius += 0.3;
  } else {
    this.targetRadius = 1;
  }

  // speed up the firework
  this.speed *= this.acceleration;

  // get the current velocities based on angle and speed
  var vx = Math.cos(this.angle) * this.speed,
    vy = Math.sin(this.angle) * this.speed;
  // how far will the firework have traveled with velocities applied?
  this.distanceTraveled = calculateDistance(this.sx, this.sy, this.x + vx, this.y + vy);

  // if the distance traveled, including velocities, is greater than the initial distance to the target, then the target has been reached
  if (this.distanceTraveled >= this.distanceToTarget) {
    createParticles(this.tx, this.ty);
    // remove the firework, use the index passed into the update function to determine which to remove
    fireworks.splice(index, 1);
  } else {
    // target not reached, keep traveling
    this.x += vx;
    this.y += vy;
  }
};

// draw firework
Firework.prototype.draw = function () {
  ctx.beginPath();
  // move to the last tracked coordinate in the set, then draw a line to the current x and y
  ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
  ctx.lineTo(this.x, this.y);
  ctx.strokeStyle = "hsl(" + hue + ", 100%, " + this.brightness + "%)";
  ctx.lineWidth = 3; // Ajustez la largeur de ligne ici
  ctx.stroke();

  ctx.beginPath();
  // draw the target for this firework with a pulsing circle
  ctx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
  ctx.stroke();
};

// create particle
function Particle(x, y) {
  this.x = x;
  this.y = y;
  // track the past coordinates of each particle to create a trail effect, increase the coordinate count to create more prominent trails
  this.coordinates = [];
  this.coordinateCount = 5;
  while (this.coordinateCount--) {
    this.coordinates.push([this.x, this.y]);
  }
  // set a random angle in all possible directions, in radians
  this.angle = random(0, Math.PI * 2);
  this.speed = random(1, 10);
  // friction will slow the particle down
  this.friction = 0.95;
  // gravity will be applied and pull the particle down
  this.gravity = 1;
  // set the hue to a random number +-20 of the overall hue variable
  this.hue = random(hue - 20, hue + 20);
  this.brightness = random(50, 80);
  this.alpha = 1;
  // set how fast the particle fades out
  this.decay = random(0.015, 0.03);
}

// update particle
Particle.prototype.update = function (index) {
  // remove last item in coordinates array
  this.coordinates.pop();
  // add current coordinates to the start of the array
  this.coordinates.unshift([this.x, this.y]);
  // slow down the particle
  this.speed *= this.friction;
  // apply velocity
  this.x += Math.cos(this.angle) * this.speed;
  this.y += Math.sin(this.angle) * this.speed + this.gravity;
  // fade out the particle
  this.alpha -= this.decay;

  // remove the particle once the alpha is low enough, based on the passed in index
  if (this.alpha <= this.decay) {
    particles.splice(index, 1);
  }
};

// draw particle
Particle.prototype.draw = function () {
  ctx.beginPath();
  // move to the last tracked coordinates in the set, then draw a line to the current x and y
  ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
  ctx.lineTo(this.x, this.y);
  ctx.strokeStyle = "hsla(" + this.hue + ", 100%, " + this.brightness + "%, " + this.alpha + ")";
  ctx.lineWidth = 5; // Ajustez la largeur de ligne ici
  ctx.stroke();
};

// create particle group/explosion
function createParticles(x, y) {
  // increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
  var particleCount = 30;
  while (particleCount--) {
    particles.push(new Particle(x, y));
  }
}

// main demo loop
function loop() {
  // this function will run endlessly with requestAnimationFrame
  requestAnimFrame(loop);

  // increase the hue to get different colored fireworks over time
  hue += 0.5;

  // normally, clearRect() would be used to clear the canvas
  // we want to create a trailing effect though
  // setting the composite operation to destination-out will allow us to clear the canvas at a specific opacity, rather than wiping it entirely
  ctx.globalCompositeOperation = "destination-out";
  // decrease the alpha property to create more prominent trails
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(0, 0, cw, ch);
  // change the composite operation back to our main mode
  // lighter creates bright highlight points as the fireworks and particles overlap each other
  ctx.globalCompositeOperation = "lighter";

  // loop over each firework, draw it, update it
  var i = fireworks.length;
  while (i--) {
    fireworks[i].draw();
    fireworks[i].update(i);
  }

  // loop over each particle, draw it, update it
  var i = particles.length;
  while (i--) {
    particles[i].draw();
    particles[i].update(i);
  }

  // launch fireworks automatically to random coordinates, when the mouse isn't down
  if (timerTick >= timerTotal) {
    if (!mousedown) {
      // start the firework at the bottom middle of the screen, then set the random target coordinates, the random y coordinates will be set within the range of the top half of the screen
      fireworks.push(new Firework(cw / 2, ch, random(0, cw), random(0, ch / 2)));
      timerTick = 0;
    }
  } else {
    timerTick++;
  }

  // limit the rate at which fireworks get launched when mouse is down
  if (limiterTick >= limiterTotal) {
    if (mousedown) {
      // start the firework at the bottom middle of the screen, then set the current mouse coordinates as the target
      fireworks.push(new Firework(cw / 2, ch, mx, my));
      limiterTick = 0;
    }
  } else {
    limiterTick++;
  }
}

// mouse event bindings
// update the mouse coordinates on mousemove
canvas.addEventListener("mousemove", function (e) {
  mx = e.pageX - canvas.offsetLeft;
  my = e.pageY - canvas.offsetTop;
});

// toggle mousedown state and prevent canvas from being selected
canvas.addEventListener("mousedown", function (e) {
  e.preventDefault();
  mousedown = true;
});

canvas.addEventListener("mouseup", function (e) {
  e.preventDefault();
  mousedown = false;
});

// once the window loads, we are ready for some fireworks!
window.onload = loop;

// Ajout du script du projet de feu d'artifice----------------------------------------------------
// window.requestAnimFrame = (function () {
//   return (
//     window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     function (callback) {
//       window.setTimeout(callback, 1000 / 60);
//     }
//   );
// })();

// // Configuration variable
// var canvas = document.getElementById("canvas"),
//   ctx = canvas.getContext("2d"),
//   cw = window.innerWidth,
//   ch = window.innerHeight,
//   fireworks = [],
//   particles = [],
//   hue = 120,
//   // lors du lancement de feux d'artifice par un clic, trop de feux d'artifice sont lancés en même temps sans limiteur,
//   //un lancement tous les 5 ticks de la boucle
//   limiterTotal = 5,
//   limiterTick = 0,
//   // ceci chronomètre les lancements automatiques de feux d'artifice, un lancement tous les 80 ticks de la boucle
//   timerTotal = 80,
//   timerTick = 0,
//   mousedown = false,
//   mx,
//   my;

// canvas.width = cw;
// canvas.height = ch;

// // obtient un nombre aléatoire dans une fourchette

// function random(min, max) {
//   return Math.random() * (max - min) + min;
// }
// // calculer la distance entre deux points
// function calculateDistance(p1x, p1y, p2x, p2y) {
//   var xDistance = p1x - p2x,
//     yDistance = p1y - p2y;
//   return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
// }
// // créer un feu d'artifice
// function Firework(sx, sy, tx, ty) {
//   this.x = sx;
//   this.y = sy;
//   this.sx = sx;
//   this.sy = sy;
//   this.tx = tx;
//   this.ty = ty;
//   // distance entre le point de départ et la cible
//   this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
//   this.distanceTraveled = 0;
//   this.coordinates = [];
//   this.coordinateCount = 3;
//   while (this.coordinateCount--) {
//     this.coordinates.push([this.x, this.y]);
//   }
//   this.angle = Math.atan2(ty - sy, tx - sx);
//   this.speed = 2;
//   this.acceleration = 1.05;
//   this.brightness = random(50, 70);
//   this.targetRadius = 1;
// }
// // mise à jour du feu d'artifice
// Firework.prototype.update = function (index) {
//   this.coordinates.pop();
//   this.coordinates.unshift([this.x, this.y]);
//   // cycle du rayon de l'indicateur de cible du cercle
//   if (this.targetRadius < 8) {
//     this.targetRadius += 0.3;
//   } else {
//     this.targetRadius = 1;
//   }
//   // accélère le feu d'artifice
//   this.speed *= this.acceleration;
//   // obtient les vitesses actuelles en fonction de l'angle et de la vitesse
//   var vx = Math.cos(this.angle) * this.speed,
//     vy = Math.sin(this.angle) * this.speed;
//   this.distanceTraveled = calculateDistance(this.sx, this.sy, this.x + vx, this.y + vy);
//   // si la distance parcourue, y compris les vitesses, est supérieure à la distance initiale de la cible, alors la cible a été atteinte
//   if (this.distanceTraveled >= this.distanceToTarget) {
//     createParticles(this.tx, this.ty);
//     // supprimer le feu d'artifice, utiliser l'index passé dans la fonction de mise à jour pour déterminer lequel supprimer
//     fireworks.splice(index, 1);
//   } else {
//     this.x += vx;
//     this.y += vy;
//   }
// };
// // dessine le feu d'artifice
// Firework.prototype.draw = function () {
//   ctx.beginPath();
//   // se déplacer vers la dernière coordonnée suivie dans l'ensemble, puis tracer une ligne jusqu'aux x et y actuels
//   ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
//   ctx.lineTo(this.x, this.y);
//   ctx.strokeStyle = "hsl(" + hue + ", 100%, " + this.brightness + "%)";
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
//   ctx.stroke();
// };

// // création d'une particule
// function Particle(x, y) {
//   this.x = x;
//   this.y = y;
//   this.coordinates = [];
//   this.coordinateCount = 200;
//   while (this.coordinateCount--) {
//     this.coordinates.push([this.x, this.y]);
//   }
//   // définir un angle aléatoire dans toutes les directions possibles
//   this.angle = random(0, Math.PI * 2);
//   this.speed = random(1, 10);
//   this.friction = 0.95;
//   // la gravité s'applique et tire la particule vers le bas
//   this.gravity = 1;

//   // fixe la teinte à un nombre aléatoire +-20 de la variable globale de teinte
//   this.hue = random(hue - 20, hue + 20);
//   this.brightness = random(50, 80);
//   this.alpha = 1;
//   // définit la vitesse à laquelle la particule s'efface
//   this.decay = random(0.015, 0.03);
// }

// // mise à jour de la particule
// Particle.prototype.update = function (index) {
//   // supprime le dernier élément du tableau de coordonnées
//   this.coordinates.pop();
//   // ajoute les coordonnées actuelles au début du tableau
//   this.coordinates.unshift([this.x, this.y]);
//   // ralentit la particule
//   this.speed *= this.friction;
//   this.x += Math.cos(this.angle) * this.speed;
//   this.y += Math.sin(this.angle) * this.speed + this.gravity;
//   // disparition de la particule
//   this.alpha -= this.decay;
//   // supprimer la particule une fois que l'alpha est suffisamment bas, en fonction de l'indice transmis
//   if (this.alpha <= this.decay) {
//     particles.splice(index, 1);
//   }
// };
// // dessiner la particule
// Particle.prototype.draw = function () {
//   ctx.beginPath();
//   ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
//   ctx.lineTo(this.x, this.y);
//   ctx.strokeStyle = "hsla(" + this.hue + ", 100%, " + this.brightness + "%, " + this.alpha + ")";
//   ctx.stroke();
// };
// // création d'un groupe de particules/d'une explosion
// function createParticles(x, y) {
//   var particleCount = 30;
//   while (particleCount--) {
//     particles.push(new Particle(x, y));
//   }
// }
// // boucle principale
// function loop() {
//   requestAnimFrame(loop);
//   // augmenter la teinte pour obtenir des feux d'artifice de couleurs différentes au fil du temps
//   hue += 0.5;

//   // normalement, clearRect() serait utilisé pour vider le canevas
//   // nous voulons cependant créer un effet de traîne	// en réglant l'opération composite sur destination-out, nous pourrons effacer la toile à une opacité spécifique, plutôt que de l'effacer entièrement
//   ctx.globalCompositeOperation = "destination-out";
//   ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
//   ctx.fillRect(0, 0, cw, ch);
//   ctx.globalCompositeOperation = "lighter";
//   // boucler sur chaque particule, la dessiner, la mettre à jour
//   var i = fireworks.length;
//   while (i--) {
//     fireworks[i].draw();
//     fireworks[i].update(i);
//   }

//   i = particles.length;
//   while (i--) {
//     particles[i].draw();
//     particles[i].update(i);
//   }
//   // lance automatiquement des feux d'artifice à des coordonnées aléatoires, lorsque la souris n'est pas abaissée
//   if (timerTick >= timerTotal) {
//     if (!mousedown) {
//       fireworks.push(new Firework(cw / 2, ch, random(0, cw), random(0, ch / 2)));
//       timerTick = 0;
//     }
//   } else {
//     timerTick++;
//   }
//   // limite la vitesse à laquelle les feux d'artifice sont lancés lorsque la souris est abaissée
//   if (limiterTick >= limiterTotal) {
//     if (mousedown) {
//       // lance le feu d'artifice en bas au milieu de l'écran, puis définit les coordonnées actuelles de la souris comme cible
//       fireworks.push(new Firework(cw / 2, ch, mx, my));
//       limiterTick = 0;
//     }
//   } else {
//     limiterTick++;
//   }
// }
// // liaisons avec l'événement souris
// // mise à jour des coordonnées de la souris lors d'un déplacement
// canvas.addEventListener("mousemove", function (e) {
//   mx = e.pageX - canvas.offsetLeft;
//   my = e.pageY - canvas.offsetTop;
// });
// // bascule de l'état « mousedown » et empêche la sélection du canevas
// canvas.addEventListener("mousedown", function (e) {
//   e.preventDefault();
//   mousedown = true;
// });

// canvas.addEventListener("mouseup", function (e) {
//   e.preventDefault();
//   mousedown = false;
// });
// // une fois la fenêtre chargée, nous sommes prêts pour un feu d'artifice !
// window.onload = function () {
//   loop();
// };
