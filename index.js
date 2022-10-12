let url = 'http://localhost:4000/api/guitars';
let searchButton = document.getElementById('searchButton');
let searchBar = document.getElementById('searchBar');
let container = document.getElementById('container');


searchButton.addEventListener('click', () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => allData(data));
 });
//container.innerHTML = JSON.stringify(data);
function allData(data){
   //container.innerHTML = JSON.stringify(data);
    for (let i = 0; i < data.length; i++) {
   
        appendData(data[i].id, data[i].model, data[i].brand, data[i].color, data[i].fretnum)
    }
};

function appendData(guitarId, model, brand, color, fretNum) {
    let guitarDiv = document.getElementById('guitars')
    
    let deleteButton = document.createElement('button');
    deleteButton.classList.add(guitarId);
    deleteButton.innerHTML = "DELETE";
  // let deleteClass = document.querySelector(`.${guitarId}`);
//console.log(deleteButton);

    let modelTag = document.createElement("h1");
    modelTag.innerHTML = `Model: ${model}`
    let brandTag = document.createElement("h2");
    brandTag.innerHTML = `Brand - ${brand}`
    let colorTag =document.createElement("h3");
    colorTag.innerHTML = `Color - ${color}`
    let fretNumTag = document.createElement("h4");
    fretNumTag.innerHTML = `Fret# = ${fretNum}`
    
    guitarDiv.append(modelTag);
    guitarDiv.append(brandTag);
    guitarDiv.append(colorTag);
    guitarDiv.append(fretNumTag);
    guitarDiv.append(deleteButton);
    
    deleteButton.addEventListener("click", (event) => {
     let targetId = event.target.classList[0]
     console.log(targetId)
     fetch(`${url}/${targetId}`, {
        method: 'DELETE'
    })
    })

};

let createButton = document.getElementById('createButton');
let modelInput = document.getElementById('modelInput');

let brandInput = document.getElementById('brandInput');
let colorInput = document.getElementById('colorInput');
let fretInput = document.getElementById('fretInput')

createButton.addEventListener("click", () => {
 
   // var inputData = {model: `${modelInput.value}`, brand: `${brandInput.value}`, color: `${colorInput.value}`, fretNum: fretInput}
    var inputData = {model: modelInput.value, brand: brandInput.value, color: colorInput.value, fretNum: fretInput.value}
    console.log(modelInput.value)
fetch(`${url}/create`, {
    method: 'POST',
    body: JSON.stringify(inputData),
    headers: {
        'Content-Type': 'application/json'
    },
})
.then((response) => response)  
.then((data) => {
    console.log("Success:", data)
})
})
