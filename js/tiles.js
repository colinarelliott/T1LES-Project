//Tile generator JS

let tileData = { };
let numColumns = 8;

function generateTileContent(cols) {
    //wipe the column container
    wipeColumnContainer();

    //generate the tiles!
    for (let i = 0; i < cols; i++) {
        const columnContainer = document.getElementById("column-container");

        //generate columns
        let column = document.createElement('div');
        column.classList.add('column');
        column.id = `column-${i}`;
        
        //generate boxes
        let box = document.createElement('div');
        box.classList.add('box');
        box.id = `box-${i}`;

        //build tree
        column.appendChild(box);
        columnContainer.appendChild(column);
    }
}

//get rid of all elements in the column-container
function wipeColumnContainer() {
    const columnContainer = document.getElementById("column-container");
    while (columnContainer.firstElementChild) {
        columnContainer.firstElementChild.remove();
    }
}

//add a page load event listener that calls the generateTileContent function
document.addEventListener('onload', function() {
    generateTileContent(8);
});