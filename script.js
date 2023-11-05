let column = 26;
let rows = 100;
const header = document.querySelector(".header")
const serialNumberContainer = document.querySelector(".sno");
const mainContainer = document.querySelector(".main");



function createHeaderCells(){
    for ( let i = 0; i <= column; i++ ){
        const headerCell = document.createElement("div");
        headerCell.className = "header-cell cell";
        if(i != 0){
            headerCell.innerText = String.fromCharCode(64+i);
        }
        header.appendChild(headerCell);
    }
}

createHeaderCells();

function createSerialNo(){
    for ( let i = 1; i <= rows; i++ ){
        const snoCell = document.createElement("div");
        snoCell.innerText = i;
        snoCell.className = "sno-cell cell";
        serialNumberContainer.appendChild(snoCell);
    }
}

createSerialNo();

function createRow(rowNumber){
    
    const row = document.createElement("div");
    row.className = "row";
    for ( let i = 1; i <= column; i++ ){
        const cell = document.createElement("div");
        cell.className = "main-cell cell";
        cell.contentEditable = true;
        cell.id = String.fromCharCode(64+i) + rowNumber;
        cell.addEventListener("focus", onFocus);
        cell.addEventListener("input", onFormChange);
        row.appendChild(cell);
    }
    mainContainer.appendChild(row);
}

function builtMainSection(){
    for ( let i = 1; i <= rows; i++ ){
        createRow(i);
    }
}

builtMainSection();