document.addEventListener('DOMContentLoaded', () => {
    // Inspecteur Foireux
    const penguinImage = document.getElementById('penguin');
    const penguinPopup = document.getElementById('manchotMessage');
    const nextPenguinBtn = document.getElementById('nextPenguin');
    const penguinMessage2 = document.getElementById('manchotMessage2');
    const penguinMessage3 = document.getElementById('manchotmessage3');

    //Voiture
    const carMessage = document.getElementById('carMessage');
    const closeBtnCar = document.getElementById('closeCar');
    const carImage = document.getElementById('car')

    //Garbage
    const garbageMessage = document.getElementById('garbageMessage');
    const garbageImage = document.getElementById('garbage');
    const closeBtnGarbage = document.getElementById('closeGarbage');

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

    //Close garbage's message:
    closeBtnGarbage.addEventListener('click', () => {
        garbageMessage.style.display = 'none';
    })

    //Garbage's Interaction :
    garbageImage.addEventListener('click', () => {
        garbageMessage.style.display = 'block';
    })

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