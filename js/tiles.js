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

        /*
        <span class="icon-text">
  <span class="icon">
    <i class="fas fa-home"></i>
  </span>
  <span>Home</span>
</span>*/

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