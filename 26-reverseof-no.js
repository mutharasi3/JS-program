// calculate reverse of a number
function revno(){
let nElement = document.getElementById('n'), rev = 0,remainder;
n = nElement.value
n = parseInt(n);
let reverseElement = document.getElementById('reverse');
while (n!= 0){
    remainder = n % 10;
    rev = rev * 10 + remainder;
    n = Math.floor(n/10);
}
reverseElement.innerHTML = ("reverse number:", rev);
}
let addbutton = document.getElementById('add-button');
addbutton.addEventListener('click',revno)