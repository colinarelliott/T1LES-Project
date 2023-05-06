//function for GENERATING the settings tab

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
    columnA.classList.add('is-4');
    columnContainer.appendChild(columnA);
    let columnB = document.createElement('div');
    columnB.classList.add('column');
    columnB.classList.add('is-4');
    columnContainer.appendChild(columnB);
    let columnC = document.createElement('div');
    columnC.classList.add('column');
    columnC.classList.add('is-4');
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