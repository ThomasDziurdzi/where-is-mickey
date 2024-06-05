document.addEventListener('DOMContentLoaded', function() {
    const porkButton = document.getElementById('pork');
    const dialogBoxPork = document.getElementById('porkDialogBox');
    const overlay = document.querySelector('.overlay');


    porkButton.addEventListener('click', function() {
        console.log('Image clicked');
        dialogBoxPork.classList.remove('hidden');
        overlay.classList.toggle('hidden');
        document.querySelector(".close").addEventListener('click', function() {
            dialogBoxPork.classList.add('hidden');
            overlay.classList.toggle('hidden');
        });
    });
})