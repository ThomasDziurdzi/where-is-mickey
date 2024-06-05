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
    const charlieImage = document.getElementById('charlie');
    const zoomSound = document.getElementById('zoomSound')
    
    charlieImage.addEventListener('mouseover', function() {
        zoomSound.currentTime = 0 //commencer à jouer depuis le début
        zoomSound.play();
        //Arrêter le son après une durée spécifique (en millisecondes)
        setTimeout(function() {
            zoomSound.pause();
        }, 4000);
    });
});