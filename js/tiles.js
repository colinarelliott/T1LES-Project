//on page load event listener 
this.addEventListener('load', function() {
    //Global variables
    window.tabName = "Tiles";
    //load tile data from tiles.json into window variable
    loadTileData();
    setTimeout(function() {
        //defaults loaded from tiles.json
        window.numCols = window.tileData.columns;
        window.numTiles = window.tileData.tiles.length;
        //generate the tiles on screen
        generateTileContent();
    }, 50); //wait 50ms for the data to loadn then generate the tiles
});

function tiles() {
    //flip tab states in html
    let settingsTab = document.getElementById("settings-tab");
    let tilesTab = document.getElementById("tiles-tab");
    settingsTab.classList.remove("is-active");
    tilesTab.classList.add("is-active");
    //switch tabName variable
    switchTab("Tiles");
    //wipe the column container (clear all content)
    wipeColumnContainer();
    
    //load tile data from tiles.json into window variable
    loadTileData();
    setTimeout(function() {
        //generate the tiles on screen
        generateTileContent();
    }, 50); //wait 50ms for the data to loadn then generate the tiles
}

//Tile generator JS
function generateTileContent() {
    //wipe the column container (clear all content)
    wipeColumnContainer();

    //create parent tile
    let container = document.createElement('div');
    container.classList.add('tile');
    container.classList.add('is-ancestor');
    container.id = `tiles-container`;

    //generate the tile columns
    for (let i = 0; i < window.numCols; i++) {
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

    for (let i = 0; i < window.numTiles; i++) {
        //generate tile
        let tile = document.createElement('article');
        tile.classList.add('tile');
        tile.classList.add('is-child');
        tile.id = `tile-${i}`;

        if (window.tileData.tiles[i].type == "text") {

            //generate tile content 
            let iconText = document.createElement('span');
            iconText.classList.add("icon-text");

            let icon = document.createElement('span')
            icon.classList.add("icon");

            let iconData = document.createElement("i");
            iconData.classList.add("fas");
            iconData.classList.add(window.tileData.tiles[i].faicon); //icon

            let tileTitle = document.createElement('span');
            tileTitle.classList.add("title");
            tileTitle.innerHTML = window.tileData.tiles[i].title;

            let tileSubtitle = document.createElement('div');
            tileSubtitle.classList.add("subtitle");
            tileSubtitle.innerHTML = window.tileData.tiles[i].content;

            //build tree
            icon.appendChild(iconData);
            iconText.appendChild(icon);
            iconText.appendChild(tileTitle);
            tile.appendChild(iconText);
            tile.appendChild(tileSubtitle);
            document.getElementById(`tile-column-${i % window.numCols}`).appendChild(tile);

        } else if (window.tileData.tiles[i].type == "image") {
            //generate tile content
            //generate tile content 
            let iconText = document.createElement('span');
            iconText.classList.add("icon-text");

            let icon = document.createElement('span')
            icon.classList.add("icon");

            let iconData = document.createElement("i");
            iconData.classList.add("fas");
            iconData.classList.add(window.tileData.tiles[i].faicon); //icon

            let tileTitle = document.createElement('span');
            tileTitle.classList.add("title");
            tileTitle.innerHTML = window.tileData.tiles[i].title;

            let tileSubtitle = document.createElement('p');
            tileSubtitle.classList.add("subtitle");
            tileSubtitle.innerHTML = window.tileData.tiles[i].content;

            let tileImage = document.createElement('figure');
            tileImage.classList.add("image");
            tileImage.classList.add("is-4by3");

            let tileImageContent = document.createElement('img');
            tileImageContent.src = window.tileData.tiles[i].image;

            //build tree
            tileImage.appendChild(tileImageContent);
            icon.appendChild(iconData);
            iconText.appendChild(icon);
            iconText.appendChild(tileTitle);
            tile.appendChild(iconText);
            tile.appendChild(tileSubtitle);
            tile.appendChild(tileImage);
            document.getElementById(`tile-column-${i % window.numCols}`).appendChild(tile);
        }
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