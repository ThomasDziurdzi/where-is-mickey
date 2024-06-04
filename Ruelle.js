document.addEventListener('DOMContentLoaded', () => {
    // Inspecteur Foireux
    const penguinImage = document.getElementById('penguin');
    const penguinPopup = document.getElementById('manchotMessage');
    const nextPenguinBtn = document.getElementById('nextPenguin');
    const penguinMessage2 = document.getElementById('manchotMessage2');

    // Mickey
    const mickeyImage = document.getElementById('mickey');
    const mickeyMessage = document.getElementById('mickeymessage');
    const lastTalkOfMickey = document.getElementById('mickeymessage2');

    //Franklin
    const franklinImage = document.getElementById('franklinsdf');
    const franklinMessage = document.getElementById('franklinMessage');
    const franlinNextBtn = document.getElementById('nextFranklin');

    //Joueur
    const playerLeave = document.getElementById('partir');
    const playerAsk = document.getElementById

    // Buttons
    const nextMickeyBtn = document.getElementById('nextMickey');
    const nextMickeyToPenguin2Btn = document.getElementById('nextPenguin2');
    const closeBtnMickey = document.getElementById('closeBtn');

    // Franklin 1st message:
    franklinImage.addEventListener('click', () => {
        franklinMessage.style.display = "block";
    });

    //1st Transition Franklin to the player
    nextPenguinBtn.addEventListener('click', () => {
        penguinPopup.style.display = 'none';
        mickeyMessage.style.display = 'block';

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