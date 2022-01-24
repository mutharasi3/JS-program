//program for large number
function large(){

    let  aElement = document.getElementById('a'),
    bElement = document.getElementById('b'),
    a,b,largeElement;
    a=aElement.value
    b = bElement.value
    if(a>b){
        largeElement = document.getElementById('large');
     largeElement.innerHTML = "largest number is:" +a;
    }
        else if (b>a){
            largeElement = document.getElementById('large');
        largeElement.innerHTML = "largest number is :" +b;
            
        }
        else{
            largeElement =document.getElementById('large');
            largeElement.innerHTML = "both are equal"
        }
}
let addbutton = document.getElementById('add-button');
addbutton.addEventListener('click',large)