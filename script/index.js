import characters from './characters.js';

document.addEventListener('DOMContentLoaded', (event) => {

    // creating columns of characters
    const columnContainer = document.querySelector('.columns-container');

    function createColumn(image, index) {
        const columnCharacter = document.createElement('div');
        columnCharacter.classList.add('columns');
        columnCharacter.style.backgroundImage = `url(${image})`;
        columnCharacter.dataset.index = index;
        columnContainer.appendChild(columnCharacter);
    }
    for (let i = 0; i < characters.length; i++) {
        createColumn(characters[i].imgCut, i)
    }

    //filters when mouseover and mouseout on columns
    const columns = document.querySelectorAll('.columns');
    columns.forEach((column) => {
        column.addEventListener('mouseover', function () {
            columns.forEach((col) => {
                if (col !== column) {
                    col.style.filter = 'grayscale(100%) opacity(0.6) blur(2px)';
                    col.classList.add('transition');
                    col.style.transform = '';
                } else {
                    col.style.filter = ''
                }
            })
            columnContainer.addEventListener('mouseleave', function () {
                columnContainer.querySelectorAll('.columns').forEach(column => {
                    column.style.filter = '';
                    column.style.transform = '';
                });
            });
        })
    });


    //Modal opening and closing
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.modal');
    const overlayModal = document.querySelector('.overlayModal');
    columns.forEach((column) => {

        //MODAL OPENING
        column.addEventListener('click', function (event) {
            //prevent for automatically closing modal
            event.stopPropagation();
            // Get the index from the data attribute
            const index = column.dataset.index;
            // Find the corresponding character object
            const character = characters[index];
            modal.classList.remove('hidden')
            // modalImage.classList.remove('hidden')
            overlayModal.classList.remove('hidden')
            modal.style.backgroundImage = `url(${character.image})`
        });

        //MODAL CLOSING
        document.addEventListener('click', function () {
            if (!modal.classList.contains('hidden')) {
                //adding class fade.out for playing animation
                modal.classList.add('fade-out');
                overlayModal.classList.add('fade-out');

                setTimeout(() => {
                    //when animation has ending, hiding modal and removing
                    //fade-out class
                    modal.classList.add('hidden');
                    overlayModal.classList.add('hidden');
                    modal.style.backgroundImage = '';
                    modal.classList.remove('fade-out');
                    overlayModal.classList.remove('fade-out');
                }, 300);
            }
        })
    })





    // function attachEventListeners(column) {
    //     column.addEventListener('mouseover', function () {
    //         let modifiedColumns = [];
    //         columnsContainer.querySelectorAll('.columns').forEach(col => {
    //             if (col !== column) {
    //                 col.style.filter = 'grayscale(100%) opacity(0.6) blur(2px)';
                    col.classList.add('transition');
                    col.style.transform = '';
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

    columnsContainer.addEventListener('mouseleave', function () {
        columnsContainer.querySelectorAll('.columns').forEach(column => {
            column.style.filter = '';
            column.style.transform = '';
        });
    });

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