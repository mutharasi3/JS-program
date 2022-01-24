//program to calculate area of triangle

function areacalculation(){
    let
    hElement= document.getElementById('h'),
    bElement = document.getElementById('b'),b,h,
    trianglearea;
     b= bElement.value
    h=hElement.value
     trianglearea = (h*b)/2

    let triangleareaelement = document.getElementById('trianglearea');
    triangleareaelement.innerHTML ='area of triangle:' + trianglearea;
}
let addButton = document.getElementById('add-button');
addButton.addEventListener('click',areacalculation)



    