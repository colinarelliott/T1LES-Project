//Tile generator JS
let tileData = { };

function generateTileContent(colCount, tileCount) {
    let numCols = 4;
    let numTiles = 10;

    if (colCount) {
        numCols = colCount;
    }

    if (tileCount) {
        numTiles = tileCount;
    }


    //wipe the column container
    wipeColumnContainer();

    //create parent tile
    let column = document.createElement('div');
    column.classList.add('tile');
    column.classList.add('is-ancestor');
    column.id = `tiles-container`;

    //generate the tile columns
    for (let i = 0; i < numCols; i++) {
        const columnContainer = document.getElementById("column-container");
        
        //generate tile columns
        let tile = document.createElement('div');
        tile.classList.add('tile');
        tile.classList.add('is-parent');
        tile.classList.add('is-vertical');
        tile.id = `tile-column-${i}`;

        //build tree
        column.appendChild(tile);
        columnContainer.appendChild(column);
    }

    for (let i = 0; i < numTiles; i++) {
        //generate tile
        let tile = document.createElement('article');
        tile.classList.add('tile');
        tile.classList.add('is-child');
        tile.id = `tile-${i}`;

        //generate tile content
        let tileTitle = document.createElement('div');
        tileTitle.classList.add("title");
        tileTitle.innerHTML = "Title";

        //build tree
        tile.appendChild(tileTitle);
        document.getElementById(`tile-column-${i % numCols}`).appendChild(tile);
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
    generateTileContent();
});