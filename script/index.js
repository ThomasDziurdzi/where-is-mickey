import characters from './characters.js';

document.addEventListener('DOMContentLoaded', (event) => {

    // creating columns of characters
    const columnContainer = document.querySelector('.columns-container');

    function createColumn(image) {
        const columnCharacter = document.createElement('div');
        columnCharacter.classList.add('column');
        columnCharacter.style.backgroundImage = `url(${image})`;
        columnContainer.appendChild(columnCharacter);
    }
    for (let i = 0; i < characters.length; i++) {
        createColumn(characters[i].imgCut)
        
    }

    const beforeDiv = document.querySelector('.overlayModal')
    function createModal(image){
        const modal = document.createElement('div');
        modal.classList.add('modal')
        modal.classList.add('hidden')
        modal.style.backgroundImage = `url(${image})`;
        beforeDiv.insertAdjacentElement("afterend", modal);
    }
    for (let i = 0; i < characters.length; i++) {
        createModal(characters[i].image)
    }
    //filters when mouseover and mouseout on columns
    //Opening Modal
    const column = document.querySelectorAll('.column');
    const modal = document.querySelector('.modal');
    const overlayModal = document.querySelector('.overlayModal');

    column.forEach((col) => {
        //FILTERS
        col.addEventListener('mouseover', function () {
            col.style.filter = 'grayscale(100%) opacity(0.6) blur(2px)';
        })
        //MODAL
        col.addEventListener('click', function () {
            // Get the index from the data attribute
            const index = col.dataset.index;
           // Find the corresponding character object
           const character = characters[index];
            modal.classList.remove('modal-hidden')
            overlayModal.classList.remove('modal-hidden')
            modal.style.backgroundImage = `url(${character.imgCut})`;
           
        });
    });


    // function attachEventListeners(column) {
    //     column.addEventListener('mouseover', function () {
    //         let modifiedColumns = [];
    //         columnsContainer.querySelectorAll('.columns').forEach(col => {
    //             if (col !== column) {
    //                 col.style.filter = 'grayscale(100%) opacity(0.6) blur(2px)';
    //                 col.classList.add('transition');
    //                 col.style.transform = '';
    //                 modifiedColumns.push(col);
    //             }
    //         });

    //         column.style.transform = 'scale(1.05)';

    //         column.addEventListener('mouseout', function () {
    //             modifiedColumns.forEach(col => {
    //                 col.style.filter = '';
    //                 col.style.transform = '';
    //             });
    //             column.style.transform = '';
    //         }, { once: true });
    //     });  
    // }

    // columnsContainer.addEventListener('mouseleave', function () {
    //     columnsContainer.querySelectorAll('.columns').forEach(column => {
    //         column.style.filter = '';
    //         column.style.transform = '';
    //     });
    // });

    // characters.forEach((character) => {
    //     const columnDiv = document.createElement('div');
    //     columnDiv.classList.add('columns');
    //     columnDiv.style.backgroundImage = `url(${character.imgCut})`;
    //     columnsContainer.appendChild(columnDiv);

    //     attachEventListeners(columnDiv);
    //     attachEventListenersModal(columnDiv, character.img); // Attach modal event listener here
    // });

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

    // function attachEventListenersModal(column, imgSrc) {
    //     const modal = document.querySelector('.modal');
    //     const overlayColumn = document.querySelector('.overlayColumn');
    //     const closeModalBtn = document.querySelector('.btn-close');
    //     // const img = document.querySelector('.fullCharacter');

    //     const openModal = function () {
    //         const characterImg = document.createElement("img");
    //         characterImg.src = imgSrc; // Set the image source for the modal
    //         modal.classList.remove('hidden');
    //         overlayColumn.classList.remove('hidden');
    //     };

    //     const closeModal = function () {
    //         modal.classList.add('hidden');
    //         overlayColumn.classList.add('hidden');
    //     };

    //     column.addEventListener('click', openModal);
    //     closeModalBtn.addEventListener('click', closeModal);
    // }




});