// //attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {
//     // trouver le bouton et la boîte de dialogue dans le DOM
const herculeButton = document.getElementById('herculeFoireux');
//     //herculeFoireux = id de l'image dans le html
const dialogBoxHercule = document.getElementById('dialogBoxHercule');

//     // montrer la boîte de dialogue quand on passe la souris sur le bouton
    herculeButton.addEventListener('click', function() {
        console.log('Image clicked'); //log pour vérifier que l'événement est déclenché
        dialogBoxHercule.classList.remove('hidden');//enlever la classe 'hidden' de la boîte de dialogue pour qu'elle apparaisse
    });

//     // cacher la boîte de dialogue quand on enlève la souris
    herculeButton.addEventListener('click', function() {
        console.log('Dialog box clicked');//log pour vérifier que l'événement est déclenché
        dialogBoxHercule.classList.add('hidden');//ajoute la classe 'hidden' de la boîte de dialogue pour qu'elle disparaisse
    });
});
// const herculeImage = document.getElementById('herculeFoireux');
// const dialogBox = document.getElementById('dialogBoxHercule');

// herculeImage.addEventListener('click', function(){
//     dialogBox.classList.remove('hidden');
// })
