function exportData(){
    let fileData = [];
    for ( let i = 1; i <= rows; i++ ){
        let arr = [];
        for ( let j = 1; j <= column; j++ ){
            let str = String.fromCharCode(64+j) + i;
           if(state[str] != undefined){
            arr.push(state[str]);
           }
           else{
            arr.push(defaultProperties);
           }
        }
        fileData.push(arr);
    }
    // console.log(fileData[0]);
    let jsonFile = JSON.stringify(fileData);
    let file = new Blob( [jsonFile], {type: "application/json"});
    let url = URL.createObjectURL(file);

    let link = document.createElement("a");
    link.href = url;
    link.download = "sheet.json";
    link.click();
    console.log("Downloading");
}

function importData(){
    
}