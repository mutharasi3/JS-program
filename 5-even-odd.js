//program to calculate number even or odd
function evod(){
let nElement= document.getElementById('n'),n,oddElement,evenElement;
n= nElement.value
   
    if(n%2==0){
        evenElement= document.getElementById('even');
        evenElement.innerHTML='the number is even:'  + n;
        }
    else{
        
        oddElement= document.getElementById('odd');
        oddElement.innerHTML='the number is odd:'  + n;
    }
}
 let addButton= document.getElementById('add-button');
 addButton.addEventListener('click',evod)