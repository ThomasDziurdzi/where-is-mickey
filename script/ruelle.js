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













