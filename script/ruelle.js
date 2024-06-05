console.log("JavaScript is working!");  // Vérifie que le script est chargé

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");  // Vérifie que le DOM est complètement chargé

    const images = document.querySelectorAll(".image-container img");  // Sélectionne toutes les images dans les conteneurs
    const carSound = document.getElementById("car-sound");  // Sélectionne l'élément audio pour la voiture
    const knifeSound = document.getElementById("knife-sound");  // Sélectionne l'élément audio pour le couteau
    const gunSound = document.getElementById("gun-sound");
    // Vérifie si les audios sont prêts à être joués
    carSound.addEventListener('canplaythrough', () => {
        console.log("Car audio is ready to play");
    });

    knifeSound.addEventListener('canplaythrough', () => {
        console.log("Knife audio is ready to play");
    });

    gunSound.addEventListener('canplaythrough', () => {
        console.log("gun audio is ready to play");
    });

    // Gère les erreurs de chargement de l'audio
    carSound.addEventListener('error', (e) => {
        console.error("Error loading car audio", e);
    });

    knifeSound.addEventListener('error', (e) => {
        console.error("Error loading knife audio", e);
    });

    gunSound.addEventListener('error', (e) => {
        console.error("Error loading gun audio")
    });

    // Variable pour suivre si l'utilisateur a interagi avec la page
    let userInteracted = false;

    // Fonction appelée lors de la première interaction de l'utilisateur
    function onUserInteraction() {
        userInteracted = true;
        document.removeEventListener('click', onUserInteraction);
        document.removeEventListener('keydown', onUserInteraction);
    }

    // Ajoute des écouteurs pour détecter la première interaction de l'utilisateur
    document.addEventListener('click', onUserInteraction);
    document.addEventListener('keydown', onUserInteraction);

    // Variables pour suivre si les effets sonores et de rotation ont été appliqués
    let carEffectApplied = sessionStorage.getItem('carEffectApplied') === 'true';
    let knifeEffectApplied = sessionStorage.getItem('knifeEffectApplied') === 'true';
    let gunEffectApplied = sessionStorage.getItem('gunEffectApplied') === 'true';

    images.forEach(image => {
        if (image.id !== "garbage") {
            image.addEventListener("mouseover", function () {
                image.style.transition = "transform 0.3s ease";  // Applique une transition à la transformation CSS
                if (image.id === "knife" && !knifeEffectApplied) {
                    image.style.transform = "scale(2.5)";  // Agrandit l'image du couteau
                    knifeEffectApplied = true;  // Marque que l'effet a été appliqué pour le couteau
                    sessionStorage.setItem('knifeEffectApplied', 'true');  // Enregistre l'état dans sessionStorage
                    if (userInteracted) {
                        knifeSound.currentTime = 0;  // Réinitialise le son à partir du début
                        knifeSound.play().then(() => {
                            console.log("Playing knife sound");
                        }).catch(error => {
                            console.error("Error playing knife sound", error);
                        });
                    } else {
                        console.log("User has not interacted with the page yet");
                    }
                } else if (image.id === "car" && !carEffectApplied) {
                    image.style.transform = "rotate(360deg)";  // Fait tourner l'image de la voiture
                    carEffectApplied = true;  // Marque que l'effet a été appliqué pour la voiture
                    sessionStorage.setItem('carEffectApplied', 'true');  // Enregistre l'état dans sessionStorage
                    if (userInteracted) {
                        carSound.currentTime = 0;  // Réinitialise le son à partir du début
                        carSound.play().then(() => {
                            console.log("Playing car sound");
                        }).catch(error => {
                            console.error("Error playing car sound", error);
                        });
                    } else {
                        console.log("User has not interacted with the page yet");
                    }

                }else if (image.id === "gun" && !gunEffectApplied) {
                        image.style.transform = "scale(2.5)";  // Agrandit l'image du pistolet
                        gunEffectApplied = true;  // Marque que l'effet a été appliqué pour le pistolet
                        sessionStorage.setItem('gunEffectApplied', 'true');  // Enregistre l'état dans sessionStorage
                        if (userInteracted) {
                            gunSound.currentTime = 0;  // Réinitialise le son à partir du début
                            gunSound.play().then(() => {
                                console.log("Playing gun sound");
                            }).catch(error => {
                                console.error("Error playing gun sound", error);
                            });
                        } else {
                            console.log("User has not interacted with the page yet");
                        }
        } else if (image.id === "gun" || image.id === "bag" || image.id === "sandwich" || image.id === "launch" || image.id === "knife") {
            image.style.transform = "scale(2.5)";  // Agrandit ces images spécifiques
        } else {
            image.style.transform = "scale(1.2)";  // Agrandit les autres images de manière standard
        }
    });

    image.addEventListener("mouseout", function () {
        image.style.transition = "transform 0.3s ease";  // Applique une transition à la transformation CSS
        if (image.id === "car" && carEffectApplied) {
            setTimeout(() => {
                image.style.transform = "rotate(0deg)";  // Réinitialise l'angle de rotation pour la voiture
            }, 300);  // Ajoute un délai pour permettre de voir l'effet de réinitialisation
        } else if (image.id === "knife" && knifeEffectApplied) {
            setTimeout(() => {
                image.style.transform = "scale(1)";  // Réinitialise la taille du couteau
            }, 300);  // Ajoute un délai pour permettre de voir l'effet de réinitialisation
        } else if (image.id === "gun" || image.id === "bag" || image.id === "sandwich" || image.id === "launch") {
            setTimeout(() => {
                image.style.transform = "scale(1)";  // Réinitialise la taille de ces images spécifiques
            }, 300);  // Ajoute un délai pour permettre de voir l'effet de réinitialisation
        } else {
            image.style.transform = "scale(1)";  // Réinitialise la taille des autres images
        }
    });
}
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Inspecteur Foireux
    const penguinImage = document.getElementById('penguin');
    const penguinPopup = document.getElementById('manchotMessage');
    const nextPenguinBtn = document.getElementById('nextPenguin');
    const penguinMessage2 = document.getElementById('manchotMessage2');
    const penguinMessage3 = document.getElementById('manchotmessage3');
    const penguinMessage4 = document.getElementById('manchotMessage4');

    //Voiture
    const carMessage = document.getElementById('carMessage');
    const closeBtnCar = document.getElementById('closeCar');
    const carImage = document.getElementById('car')

    //Garbage
    const garbageMessage = document.getElementById('garbageMessage');
    const garbageImage = document.getElementById('garbage');
    const closeBtnGarbage = document.getElementById('closeGarbage');
    const garbageMessage2 = document.getElementById('garbageMessage2');
    const nextButtonGarbage = document.getElementById('nextGarbage');

    //Sandwich
    const sandwichMessage = document.getElementById('sandwichMessage');
    const nextBtnSandwich = document.getElementById('nextSandwich');
    const sandwichMessage2 = document.getElementById('sandwichMessage2');
    const nextBtnSandwich2 = document.getElementById('nextSandwich2');

    //Revolver
    const revolverMessage = document.getElementById('revolverMessage');
    const nextBtnRevolver = document.getElementById('nextRevolver');
    const revolverMessage2 = document.getElementById('revolverMessage2');
    const closeBtnRevolver = document.getElementById('closeRevolver')

    //Arme alien
    const alienMessage = document.getElementById('alienMessage');
    const nextBtnAlien = document.getElementById('nextAlien');
    const alienMessage2 = document.getElementById('alienMessage2');
    const closeBtnAlien = document.getElementById('closeAlien');

    //Sac à main
    const sacMessage = document.getElementById('sacMessage');
    const nextSac = document.getElementById('nextSac');
    const sacMessage2 = document.getElementById('sacMessage2');


    // Mickey
    const mickeyImage = document.getElementById('mickey');
    const mickeyMessage = document.getElementById('mickeymessage');
    const lastTalkOfMickey = document.getElementById('mickeymessage2');

    //Franklin
    const franklinImage = document.getElementById('franklinsdf');
    const franklinMessage = document.getElementById('franklinMessage');
    const franklinNextBtn = document.getElementById('nextFranklin');
    const franklinMessage2 = document.getElementById('franklinMessage2');
    const franklinMessage3 = document.getElementById('franklinMessage3');

    //Joueur
    const playerLeave = document.getElementById('partir');
    const playerAsk = document.getElementById('nextFranklin2')
    const playerMessage = document.getElementById('joueurMessage');
    const choice1 = document.getElementById('joueurChoice1');
    const choice2 = document.getElementById('joueurChoice2')
    // Buttons
    const nextMickeyBtn = document.getElementById('nextMickey');
    const nextMickeyToPenguin2Btn = document.getElementById('nextPenguin2');
    const closeBtnMickey = document.getElementById('closeBtn');
    const nextFranklinToPlayer = document.getElementById('nextFranklin3');
    const nextPenguinToFranklin = document.getElementById('nextFranklin4');
    const nextFranklinToPenguin = document.getElementById('nextFranklin5');
    const unlockGarbage = document.getElementById('nextFranklin6');

    //Crime weapon discoverd :
    nextBtnSandwich2.addEventListener('click', () => {
        sandwichMessage2.style.display = 'none';
        penguinMessage4.style.display = 'block';


    })

    //Sandwich selection :
    nextBtnSandwich.addEventListener('click', () => {
        sandwichMessage2.style.display = "block";
        sacMessage.style.display = "none";
        alienMessage.style.display = 'none';
        revolverMessage.style.display = 'none';
        sandwichMessage.style.display = 'none';

    })

    //Sac selection :
    nextSac.addEventListener('click', () => {
        sacMessage2.style.display = 'block';
        sacMessage.style.display = "none";
        alienMessage.style.display = 'none';
        revolverMessage.style.display = 'none';
        sandwichMessage.style.display = 'none';

    })

    //Alien weapon close window :
    closeBtnAlien.addEventListener('click', () => {
        alienMessage2.style.display = 'none';
    })

    //Alien weapon selection :
    nextBtnAlien.addEventListener('click', () => {
        alienMessage2.style.display = 'block';
        sacMessage.style.display = "none";
        alienMessage.style.display = 'none';
        revolverMessage.style.display = 'none';
        sandwichMessage.style.display = 'none';

    })

    //Revolver close window:
    closeBtnRevolver.addEventListener('click', () => {
        revolverMessage2.style.display = 'none';
    })

    //Revolver selection :
    nextBtnRevolver.addEventListener('click', () => {
        revolverMessage2.style.display = 'block';
        sacMessage.style.display = "none";
        alienMessage.style.display = 'none';
        revolverMessage.style.display = 'none';
        sandwichMessage.style.display = 'none';

    })

    //Choice of player between 4 items :
    nextButtonGarbage.addEventListener('click', () => {
        sacMessage.style.display = "block";
        alienMessage.style.display = 'block';
        revolverMessage.style.display = 'block';
        sandwichMessage.style.display = 'block';
        garbageMessage2.style.display = 'none';
    })

    //Unlocked garbage interaction :
    garbageImage.addEventListener('click', () => {
        garbageMessage2.style.display = "block";
    })

    // //Close garbage's message:
    // closeBtnGarbage.addEventListener('click', () => {
    //     garbageMessage.style.display = 'none';
    // })

    // //Garbage's Interaction :
    // garbageImage.addEventListener('click', () => {
    //     garbageMessage.style.display = 'block';
    // })

    //Close car's message :
    closeBtnCar.addEventListener('click', () => {
        carMessage.style.display = 'none';
    })

    //Car's Interaction :
    carImage.addEventListener('click', () => {
        carMessage.style.display = 'block';
    })

    //Unlock garbage interaction and close big talk with Franklin and Foireux :
    unlockGarbage.addEventListener('click', () => {
        penguinMessage3.style.display = 'none';
    })

    //Franklin to Foireux :
    nextFranklinToPenguin.addEventListener('click', () => {
        franklinMessage3.style.display = 'none';
        penguinMessage3.style.display = 'block';
    })

    //Franklin 3rd message:
    nextPenguinToFranklin.addEventListener('click', () => {
        playerMessage.style.display = "none";
        franklinMessage3.style.display = "block";
    })

    // Franklin 1st message:
    franklinImage.addEventListener('click', () => {
        franklinMessage.style.display = "block";
    });
    // Frankin 2nd message to player:
    nextFranklinToPlayer.addEventListener('click', () => {
        franklinMessage2.style.display = 'none';
        playerMessage.style.display = 'block';
    })

    //choice 2 of player
    playerAsk.addEventListener('click', () => {
        choice1.style.display = "none";
        choice2.style.display = "none";
        franklinMessage2.style.display = "block";

    })

    //Choice 1 of player
    playerLeave.addEventListener('click', () => {
        choice1.style.display = "none";
        choice2.style.display = "none";
    });


    //1st Transition Franklin to the player
    franklinNextBtn.addEventListener('click', () => {
        franklinMessage.style.display = 'none';
        choice1.style.display = 'block';
        choice2.style.display = 'block'

    });

    // Show the penguin message when the penguin image is clicked
    penguinImage.addEventListener('click', () => {
        penguinPopup.style.display = 'block';
    });

    // Hide the penguin message and show the mickey message when the next button is clicked
    nextPenguinBtn.addEventListener('click', () => {
        penguinPopup.style.display = 'none';
        mickeyMessage.style.display = 'block';
    });

    // Hide the mickey message and show the second penguin message when the next button is clicked
    nextMickeyBtn.addEventListener('click', () => {
        mickeyMessage.style.display = 'none';
        penguinMessage2.style.display = 'block';
    });

    // Show the last mickey message when the mickey image is clicked
    mickeyImage.addEventListener('click', () => {
        lastTalkOfMickey.style.display = 'block';
    });

    // Hide the last mickey message when the close button is clicked
    closeBtnMickey.addEventListener('click', () => {
        lastTalkOfMickey.style.display = 'none';
    });

    // Hide the last mickey message when the next button is clicked
    nextMickeyToPenguin2Btn.addEventListener('click', () => {
        penguinMessage2.style.display = 'none';
    });
    // Hide the last mickey message when the close button is clicked
    closeBtnMickey.addEventListener('click', () => {
        lastTalkOfMickey.style.display = 'none';
    });
    // Hide the last mickey message when the close button is clicked
    closeBtnMickey.addEventListener('click', () => {
        lastTalkOfMickey.style.display = 'none';
    });
});










