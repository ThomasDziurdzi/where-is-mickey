//attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne les éléments du DOM
    const herculeButton = document.getElementById('herculeButton');
    const dialogBoxHercule = document.getElementById('dialogBoxHercule');

    // Événement de survol pour afficher la boîte de dialogue
    herculeButton.addEventListener('mouseover', function() {
        dialogBoxHercule.classList.remove('hidden');
    });

    // Événement de sortie pour cacher la boîte de dialogue
    herculeButton.addEventListener('mouseout', function() {
        dialogBoxHercule.classList.add('hidden');
    });
});
