//----------------CODE NICO #1-------------
// document.addEventListener('DOMContentLoaded', function() {
//     // trouver le bouton et la boîte de dialogue dans le DOM
//     const herculeButton = document.getElementById('herculeFoireux');
//     const dialogBoxHercule = document.getElementById('dialogBoxHercule');

//     // Vérifier que les éléments existent
//     if (herculeButton && dialogBoxHercule) {
//         // basculer la visibilité de la boîte de dialogue quand on clique sur le bouton
//         herculeButton.addEventListener('click', function() {
//             console.log('Image clicked'); // log pour vérifier que l'événement est déclenché
//             if (dialogBoxHercule.classList.contains('hidden')) {
//                 dialogBoxHercule.classList.remove('hidden');
//                 console.log('Dialog box is now visible'); // log pour vérifier que la boîte de dialogue est visible
//             } else {
//                 dialogBoxHercule.classList.add('hidden');
//                 console.log('Dialog box is now hidden'); // log pour vérifier que la boîte de dialogue est cachée
//             }
//         });
//     } else {
//         console.error('Element(s) not found:', {
//             herculeButton: !!herculeButton,
//             dialogBoxHercule: !!dialogBoxHercule
//         });
//     }
// });
//--------------------------------------------

//-------------------------CODE INITIAL DRINE-----------------
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
});
// //     // cacher la boîte de dialogue quand on enlève la souris
//     herculeButton.addEventListener('click', function() {
//         console.log('Dialog box clicked');//log pour vérifier que l'événement est déclenché
//         dialogBoxHercule.classList.add('hidden');//ajoute la classe 'hidden' de la boîte de dialogue pour qu'elle disparaisse
//     });
//---------------------------------------------------


//-----------------------CODE NICO #2--------------------
// document.addEventListener('DOMContentLoaded', function() {
//     const herculeButton = document.getElementById('herculeFoireux');
//     const dialogBoxHercule = document.getElementById('dialogBoxHercule');

//     herculeButton.addEventListener('click', function() {
//         console.log('Image clicked'); // Log pour vérifier que l'événement est déclenché

//         // Toggle la classe 'hidden' pour basculer la visibilité de la boîte de dialogue
//         dialogBoxHercule.classList.toggle('hidden');

//         // Log pour vérifier si la classe 'hidden' est ajoutée ou retirée
//         if (dialogBoxHercule.classList.contains('hidden')) {
//             console.log('Dialog box is now hidden');
//         } else {
//             console.log('Dialog box is now visible');
//         }
//     });
// });
//---------------------------------------------------------