const cellNamePlaceholder = document.getElementById("active-cell");
let activeElement = null;
const fontInputSize = document.querySelector("#fontsize");
const form = document.querySelector("#form");
const expression = document.querySelector(".expression");
expression.addEventListener("input", evalExpression);


const defaultProperties = {
    fontFamily : "sans",
    fontSize : 16,
    color : "#000000",
    textAlign : "left",
    backgroundColor : "#ffffff",
    isBold: false,
    isItalic: false,
    isUnderline: false,
    value: "",
}

const state = {};
function onFocus(event){
    expression.value = "";
    const elementId = event.target.id;
    cellNamePlaceholder.innerText = elementId;
    activeElement = event.target;
    if(state[elementId]){
        resetOptions(state[elementId]);
    }
    else{
        resetOptions(defaultProperties)
    }
}

function resetOptions(optionState){
    form.fontfamily.value = optionState.fontFamily;
    form.fontsize.value = optionState.fontSize;
    form.textalign.value = optionState.textAlign;
    form.textcolor.value =optionState.color;
    form.bgcolor.value = optionState.backgroundColor;
    form.bold.checked = optionState.isBold;
    form.italic.checked = optionState.isItalic;
    form.underline.checked = optionState.isUnderline;
}

function onChangeFontSize(){

}

function onFormChange(){
    if(!activeElement){
        alert("Please select a cell");
        form.reset();
        return;
    }

    let currentState = {
        color: form.textcolor.value,
        backgroundColor: form.bgcolor.value,
        fontSize: form.fontsize.value,
        fontFamily: form.fontfamily.value,
        isBold: form.bold.checked,
        isItalic: form.italic.checked,
        isUnderline: form.underline.checked,
        textAlign: form.textalign.value,
    }
    applyStyleToCell(currentState);
    state[activeElement.id] = {...currentState, value: activeElement.innerText};
}

function applyStyleToCell(styleObject){
    activeElement.style.fontSize = `${styleObject.fontSize}px`;
    activeElement.style.fontFamily = styleObject.fontFamily;
    activeElement.style.color = styleObject.color;
    activeElement.style.backgroundColor = styleObject.backgroundColor;
    activeElement.style.textAlign = styleObject.textAlign;
    if(styleObject.isBold){
        activeElement.style.fontWeight = "bold";
    }
    if(styleObject.isItalic){
        activeElement.style.fontStyle = "italic";
    }
    if(styleObject.isUnderline){
        activeElement.style.textDecoration = "underline"
    }
    
}

function evalExpression(){
    if(!activeElement){
        alert("Please select a cell");
        expression.value = "";
        return;
    }
    let str = expression.value
    if(eval(str) == undefined){
        return;
    }
    activeElement.innerText = eval(str);
}