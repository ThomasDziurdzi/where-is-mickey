document.addEventListener('DOMContentLoaded', function () {

    //Porky Chris-P Bacon
    const porkyImage = document.getElementById('pork');
    const porkyMessage = document.getElementById('porkyMessage');
    const closeBtnPorky = document.getElementById('closePorky');

    //Bugs Bunny the mac
    const bugsImage = document.getElementById('lapin');
    const bugsMessage = document.getElementById('bugsMessage');
    const closeBtnBugs = document.getElementById('closeBugs');

    //Daffy the Bartender
    const daffyImage = document.getElementById('canard');
    const daffyMessage = document.getElementById('daffyMessage');
    const closeBtnDaffy = document.getElementById('closeDaffy');

    //Minnie the whore

    const minnieImage = document.getElementById('minnie');
    const minnieMessage = document.getElementById('minnieMessage');
    const closeBtnMinnie = document.getElementById('closeMinnie');

    //Inspecteur Foireux
    const foireuxImage = document.getElementById('pingouin');
    const foireuxMessage = document.getElementById('foireuxMessage');
    const foireuxMessage2 = document.getElementById('foireuxMessage2');
    const closeBtnFoireux = document.getElementById('closeFoireux');
    const closeBtnFoireux2 = document.getElementById('closeFoireux2');

    //Close foireux 2nd Message
    // closeBtnFoireux2.addEventListener('click', () => {
    //     foireuxMessage2.style.display = "none";
    // })

    //Foireux 2nd Message 
    foireuxImage.addEventListener('click', () => {
        foireuxMessage2.style.display = "block";

    })

    //Close Foireux  message
    closeBtnFoireux.addEventListener('click', () => {
        foireuxMessage.style.display = "none";
    })

    // Foireux 1st message when page loaded
    window.addEventListener('load', () => {
        foireuxMessage.style.display = "block";
    })

    //Close Minnie 1st message
    closeBtnMinnie.addEventListener('click', () => {
        minnieMessage.style.display = 'none';
    })

    //Minnie 1st Message
    minnieImage.addEventListener('click', () => {
        minnieMessage.style.display = "block";
    })

    //Daffy close 1st message
    closeBtnDaffy.addEventListener('click', () => {
        daffyMessage.style.display = "none";
    })

    //Daffy 1st message
    daffyImage.addEventListener('click', () => {
        daffyMessage.style.display = "block";
    })

    //Bugs close 1st message
    closeBtnBugs.addEventListener('click', () => {
        bugsMessage.style.display = 'none';
    })

    //Bugs 1st message
    bugsImage.addEventListener('click', () => {
        bugsMessage.style.display = 'block';
    })

    //Porky close 1st message
    closeBtnPorky.addEventListener('click', () => {
        porkyMessage.style.display = 'none';
    })

    //Porky 1st message
    porkyImage.addEventListener('click', () => {
        porkyMessage.style.display = "block";
    })
})