//attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {
    //     // trouver le bouton et la boîte de dialogue dans le DOM
    const herculeButton = document.getElementById('herculeFoireux');
    //     //herculeFoireux = id de l'image dans le html
    const dialogBoxHercule = document.getElementById('dialogBoxHercule');
    const overlay = document.querySelector('.overlay');
    
    //     // montrer la boîte de dialogue quand on passe la souris sur le bouton
    herculeButton.addEventListener('click', function() {
        console.log('Image clicked'); //log pour vérifier que l'événement est déclenché
        dialogBoxHercule.classList.toggle('hidden');//enlever la classe 'hidden' de la boîte de dialogue pour qu'elle apparaisse
        overlay.classList.toggle('hidden');
        document.querySelector(".close").addEventListener("click",function(){
            dialogBoxHercule.classList.add("hidden");
            overlay.classList.toggle('hidden');
        });
    });
    //survol image Charlie
    const charlieImage = document.getElementById('charlie');
    const zoomSound = document.getElementById('zoomSound')
    
    charlieImage.addEventListener('mouseover', function() {
        zoomSound.currentTime = 0; //commencer à jouer depuis le début
        zoomSound.play();

        //Arrêter le son après une durée spécifique (en millisecondes)
        setTimeout(function() {
            zoomSound.pause();
        }, 2000);
    });
    
    // Fonction pour afficher la modal Charlie
    function showModalCharlie() {
        const modalCharlie = document.getElementById('dialogBoxCharlie');
        const closeModalCharlie = document.querySelector('.close-charlie-modal');
        
        modalCharlie.classList.toggle('hidden');
        modalCharlie.style.display = 'block';

        // Fermer la modal
        closeModalCharlie.addEventListener('click', function() {
            modalCharlie.style.display = 'none';
        });

        // Fermer la modal quand on clique en dehors de la modal
        window.addEventListener('click', function(event) {
            if (event.target == modalCharlie) {
                modalCharlie.style.display = 'none';
            }
        });
    }
});