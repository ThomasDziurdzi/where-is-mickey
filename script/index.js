import characters from './characters.js';

document.addEventListener('DOMContentLoaded', (event) => {
    const columnsContainer = document.querySelector('.columns-container');

    function attachEventListeners(column) {
        column.addEventListener('mouseover', function () {
            let modifiedColumns = [];
            columnsContainer.querySelectorAll('.columns').forEach(col => {
                if (col !== column) {
                    col.style.filter = 'grayscale(100%) opacity(0.6) blur(2px)';
                    col.classList.add('transition');
                    col.style.transform = '';
                    modifiedColumns.push(col);
                }
            });

            column.style.transform = 'scale(1.05)';

            column.addEventListener('mouseout', function () {
                modifiedColumns.forEach(col => {
                    col.style.filter = '';
                    col.style.transform = '';
                });
                column.style.transform = '';
            }, { once: true });
        });  
    }

    columnsContainer.addEventListener('mouseleave', function () {
        columnsContainer.querySelectorAll('.columns').forEach(column => {
            column.style.filter = '';
            column.style.transform = '';
        });
    });

    characters.forEach((character) => {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('columns');
        columnDiv.style.backgroundImage = `url(${character.imgCut})`;
        columnsContainer.appendChild(columnDiv);

        attachEventListeners(columnDiv);
        attachEventListenersModal(columnDiv, character.img); // Attach modal event listener here
    });

    function buttonTransition(classButton, overlay) {
        const transitionLink = document.querySelector(`.${classButton}`);
        const overlayAnimation = document.querySelector(`.${overlay}`);

        if (transitionLink) {
            transitionLink.addEventListener('click', (e) => {
                e.preventDefault();
                const targetHref = transitionLink.getAttribute('href');

                overlayAnimation.classList.add('active');

                setTimeout(() => {
                    window.location.href = targetHref;
                }, 1000);
            });
        }
    }

    buttonTransition('transition-button', 'overlayPage');

    function attachEventListenersModal(column, imgSrc) {
        const modal = document.querySelector('.modal');
        const overlayColumn = document.querySelector('.overlayColumn');
        const closeModalBtn = document.querySelector('.btn-close');
        // const img = document.querySelector('.fullCharacter');

        const openModal = function () {
            const characterImg = document.createElement("img");
            characterImg.src = imgSrc; // Set the image source for the modal
            modal.classList.remove('hidden');
            overlayColumn.classList.remove('hidden');
        };

        const closeModal = function () {
            modal.classList.add('hidden');
            overlayColumn.classList.add('hidden');
        };

        column.addEventListener('click', openModal);
        closeModalBtn.addEventListener('click', closeModal);
    }
});
// characters.forEach((character) => {
//     const columnDiv = document.createElement('div');
//     columnDiv.classList.add('columns');
//     columnDiv.style.backgroundImage = `url(${character.imgCut})`;
//     columnsContainer.appendChild(columnDiv);
