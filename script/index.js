document.addEventListener('DOMContentLoaded', (event) => {
    const columns = document.querySelectorAll('.columns');
    const columnsContainer = document.querySelector('.columns-container');
    const begin = document.getElementById('begin');
    console.log(begin)
   

    columns.forEach(column => {
        //Itère sur chaque élément de la nodelist et ajoute un eventlistener
        column.addEventListener('mouseover', function () {
            columns.forEach(col => {
                //vérifie la condition à chaque survol d'une colonne
                if (col !== column) {
                    col.style.filter = 'grayscale(100%) opacity(20%) blur(2px)';
                    col.classList.add('transition');
                }
            })
        })

        column.addEventListener('mouseout', function () {
            columns.forEach(col => {
                col.style.filter = '';
            })
        })
    });

    //On s'assure qu'une fois quitté le conteneur, plus aucun filtre n'est actif
    columnsContainer.addEventListener('mouseleave', function () {
        columns.forEach(column => {
            column.style.filter = '';
        })
    })

//Crée un fondu noir pour passer d'une page à l'autre
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
                }, 1000); // Correspond à la durée de l'animation CSS
            });
        }
    }

    buttonTransition('transition-button', 'overlayPage');


//-------------------------MODALE--------------------------
const modal = document.querySelector('.modal');
const overlayColumn = document.querySelector('.overlayColumn');
const firstImg = document.querySelector('.sixth');
const closeModalBtn = document.querySelector('.btn-close');

const openModal = function() {
    modal.classList.remove('hidden');
    overlayColumn.classList.remove('hidden');
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlayColumn.classList.add('hidden');
}



firstImg.addEventListener('click', openModal)
closeModalBtn.addEventListener('click',closeModal)


});

