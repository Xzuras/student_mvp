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
        appendData(data[i].model, data[i].brand, data[i].color, data[i].fretnum)
    }
}

function appendData(model, brand, color, fretNum) {
    let guitarDiv= document.getElementById('guitars')
    
    let modelTag = document.createElement("h1");
    modelTag.innerHTML = model
    let brandTag = document.createElement("h2");
    brandTag.innerHTML = brand
    let colorTag =document.createElement("h3");
    colorTag.innerHTML = color
    let fretNumTag = document.createElement("h4");
    fretNumTag.innerHTML = fretNum
    
    guitarDiv.append(modelTag);
    guitarDiv.append(brandTag);
    guitarDiv.append(colorTag);
    guitarDiv.append(fretNumTag);

}
