//Tile generator JS
let tileData = { };

function generateTileContent(colCount, tileCount) {
    //defaults
    let numCols = 4;
    let numTiles = 10;

    //overrides
    if (colCount) { numCols = colCount; }
    if (tileCount) { numTiles = tileCount; }

    //wipe the column container (clear all content)
    wipeColumnContainer();

    //create parent tile
    let container = document.createElement('div');
    container.classList.add('tile');
    container.classList.add('is-ancestor');
    container.id = `tiles-container`;

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
        container.appendChild(tile);
        columnContainer.appendChild(container);
    }

    for (let i = 0; i < numTiles; i++) {
        //generate tile
        let tile = document.createElement('article');
        tile.classList.add('tile');
        tile.classList.add('is-child');
        tile.id = `tile-${i}`;

        //generate tile content 
        let iconText = document.createElement('span');
        iconText.classList.add("icon-text");

        let icon = document.createElement('span')
        icon.classList.add("icon");

        let iconData = document.createElement("i");
        iconData.classList.add("fas");
        iconData.classList.add("fa-home"); //icon

        let tileTitle = document.createElement('span');
        tileTitle.classList.add("title");
        tileTitle.innerHTML = "Title";

        let tileSubtitle = document.createElement('div');
        tileSubtitle.classList.add("subtitle");
        tileSubtitle.innerHTML = "subtitle text";

        //build tree
        icon.appendChild(iconData);
        iconText.appendChild(icon);
        iconText.appendChild(tileTitle);
        tile.appendChild(iconText);
        tile.appendChild(tileSubtitle);
        document.getElementById(`tile-column-${i % numCols}`).appendChild(tile);
    }
}

//loads the tiles.json file data using readTextFile() and returns it
function loadTileData(){
    readTextFile("data/tiles.json", function(text){
        let tileData = JSON.parse(text);
        console.log(tileData);
        //load into global variables window.tileData
        window.tileData = tileData;
    });
}

//reads .JSON files out to a string
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//get rid of all elements in the column-container
function wipeColumnContainer() {
    const columnContainer = document.getElementById("column-container");
    while (columnContainer.firstElementChild) {
        columnContainer.firstElementChild.remove();
    }
}

//add a page load event listener that calls the functions
this.addEventListener('load', function() {
    //load tile data from tiles.json into window variable
    loadTileData();
    //generate the tiles on screen
    generateTileContent();
});