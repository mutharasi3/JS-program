//Program for Calculating Simple Interest
function interest(){
    let pElement = document.getElementById('p'),
    nElement = document.getElementById('n'),
    rElement = document.getElementById('r'),p ,n,r,simpleinterest;
    p = pElement.value
    n = nElement.value
    r = rElement.value

    simpleinterest = (p*n*r)/100;
    let simpleinterestElement = document.getElementById('simpleinterest');
    simpleinterestElement.innerHTML = "simpleinterest:" +simpleinterest;
    }
let addButton=document.getElementById("add-button");
addButton.addEventListener('click', interest)