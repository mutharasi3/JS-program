//Program for calculating Square and Cube
function scube(){
let nElement = document.getElementById('n'),
n,square,cube;
n=nElement.value
    square = n*n;
    cube=n*n*n;
    let squareElement = document.getElementById('square'),
    cubeElement = document.getElementById('cube');
    squareElement.innerHTML = "square:" + square;
    cubeElement.innerHTML = "cube:" +cube;
    
}
let addbutton = document.getElementById('add-button');

addbutton.addEventListener('click',scube)