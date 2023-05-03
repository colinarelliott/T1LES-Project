//Global variables
window.tabName = "Tiles";

//Tab switcher
function switchTab(tabName) {
    //set the tab name
    window.tabName = tabName;
}

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

function settings() {
    //get the column-container
    const columnContainer = document.getElementById("column-container");
    
    //flip tab states in html
    let settingsTab = document.getElementById("settings-tab");
    let tilesTab = document.getElementById("tiles-tab");
    settingsTab.classList.add("is-active");
    tilesTab.classList.remove("is-active");
    //switch tabName variable
    switchTab("Settings");
    //wipe the column container (clear all content)
    wipeColumnContainer();
    //add in settings content here

    //create columns
    let columnA = document.createElement('div');
    columnA.classList.add('column');
    columnA.classList.add('is-2');
    columnContainer.appendChild(columnA);
    let columnB = document.createElement('div');
    columnB.classList.add('column');
    columnB.classList.add('is-2');
    columnContainer.appendChild(columnB);
    let columnC = document.createElement('div');
    columnC.classList.add('column');
    columnC.classList.add('is-2');
    columnContainer.appendChild(columnC);

    //AMOUNT OF COLUMNS SETTING
    let amountOfColumns = document.createElement('div');
    amountOfColumns.classList.add('box');
    amountOfColumns.classList.add('has-text-centered');
    amountOfColumns.setAttribute('onclick', 'checkAmountOfColumns()');
    columnA.appendChild(amountOfColumns);

    let amountOfColumnsTitle = document.createElement('p');
    amountOfColumnsTitle.classList.add('title');
    amountOfColumnsTitle.innerHTML = "Amount of Columns";
    amountOfColumns.appendChild(amountOfColumnsTitle);

    let amountOfColumnsRadio = document.createElement('div');
    amountOfColumnsRadio.classList.add('control');
    amountOfColumns.appendChild(amountOfColumnsRadio);

    let amountOfColumnsRadioLabel = document.createElement('label');
    amountOfColumnsRadioLabel.classList.add('radio');
    amountOfColumnsRadio.appendChild(amountOfColumnsRadioLabel);

    let amountOfColumnsRadioInput = document.createElement('input');
    amountOfColumnsRadioInput.type = "radio";
    amountOfColumnsRadioInput.name = "columns";
    amountOfColumnsRadioInput.value = "3";
    amountOfColumnsRadioInput.id = "columns-radio-3";
    amountOfColumnsRadioLabel.appendChild(amountOfColumnsRadioInput);

    let amountOfColumnsRadioSpan = document.createElement('span');
    amountOfColumnsRadioSpan.innerHTML = "3";
    amountOfColumnsRadioLabel.appendChild(amountOfColumnsRadioSpan);
    
    let amountOfColumnsRadioLabel2 = document.createElement('label');
    amountOfColumnsRadioLabel2.classList.add('radio');
    amountOfColumnsRadio.appendChild(amountOfColumnsRadioLabel2);

    let amountOfColumnsRadioInput2 = document.createElement('input');
    amountOfColumnsRadioInput2.type = "radio";
    amountOfColumnsRadioInput2.name = "columns";
    amountOfColumnsRadioInput2.value = "4";
    amountOfColumnsRadioInput2.id = "columns-radio-4";
    amountOfColumnsRadioLabel2.appendChild(amountOfColumnsRadioInput2);

    let amountOfColumnsRadioSpan2 = document.createElement('span');
    amountOfColumnsRadioSpan2.innerHTML = "4";
    amountOfColumnsRadioLabel2.appendChild(amountOfColumnsRadioSpan2);

    let amountOfColumnsRadioLabel3 = document.createElement('label');
    amountOfColumnsRadioLabel3.classList.add('radio');
    amountOfColumnsRadio.appendChild(amountOfColumnsRadioLabel3);

    let amountOfColumnsRadioInput3 = document.createElement('input');
    amountOfColumnsRadioInput3.type = "radio";
    amountOfColumnsRadioInput3.name = "columns";
    amountOfColumnsRadioInput3.value = "5";
    amountOfColumnsRadioInput3.id = "columns-radio-5";
    amountOfColumnsRadioLabel3.appendChild(amountOfColumnsRadioInput3);

    let amountOfColumnsRadioSpan3 = document.createElement('span');
    amountOfColumnsRadioSpan3.innerHTML = "5";
    amountOfColumnsRadioLabel3.appendChild(amountOfColumnsRadioSpan3);

    switch(window.numCols) {
        case "3":
            document.getElementById("columns-radio-3").checked = true;
            break;
        case "4":
            document.getElementById("columns-radio-4").checked = true;
            break;
        case "5":
            document.getElementById("columns-radio-5").checked = true;
            break;
        default:
            document.getElementById("columns-radio-3").checked = true;
            break;
    }
}

function checkAmountOfColumns() {
    //get the amount of columns checkboxes
    let aOC = document.getElementsByName("columns");
    
    setTimeout(function() {
        for (let i = 0; i < aOC.length; i++) {
            if (aOC[i].checked) {
                window.numCols = aOC[i].value; //set the number of columns to the value of the checked radio button
            }
        }
    }, 50); //after 50ms so the radio buttons have time to load
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
        tileSubtitle.innerHTML = window.tileData.tiles[i].subtitle;

        //build tree
        icon.appendChild(iconData);
        iconText.appendChild(icon);
        iconText.appendChild(tileTitle);
        tile.appendChild(iconText);
        tile.appendChild(tileSubtitle);
        document.getElementById(`tile-column-${i % window.numCols}`).appendChild(tile);
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

//reads .JSON files out to a string using XMLHttpRequest
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
    setTimeout(function() {
        //defaults loaded from tiles.json
        window.numCols = window.tileData.columns;
        window.numTiles = window.tileData.tiles.length;
        //generate the tiles on screen
        generateTileContent();
    }, 50); //wait 50ms for the data to loadn then generate the tiles
});