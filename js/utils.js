//Tab switcher
function switchTab(tabName) {
    //set the tab name
    window.tabName = tabName;
}

//get rid of all elements in the column-container
function wipeColumnContainer() {
    const columnContainer = document.getElementById("column-container");
    while (columnContainer.firstElementChild) {
        columnContainer.firstElementChild.remove();
    }
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