document.addEventListener('DOMContentLoaded', (event) => {
    const columns = document.querySelectorAll('.columns');
    const columnsContainer = document.querySelector('.columns-container');

    columns.forEach(column => {
        //Itère sur chaque élément de la nodelist et ajoute un eventlistener
        column.addEventListener('mouseover', function () {
            columns.forEach(col => {
                //vérifie la condition à chaque survol d'une colonne
                if (col !== column) {
                    col.style.filter = 'grayscale(100%) opacity(20%)';
                    col.classList.add('transition');
                }
            })
        })

        column.addEventListener('mouseout', function() {
            columns.forEach(col => {
                col.style.filter = '';
            })
        })
    });

    //On s'assure qu'une fois quitté le conteneur, plus aucun filtre n'est actif
    columnsContainer.addEventListener('mouseleave', function() {
        columns.forEach(column => {
            column.style.filter = '';
        })
    })
});

