// Program to SWAP two numbers
function swap(){
let  aElement =document.getElementById('a'),
    bElement = document.getElementById('b'),
     a, b, temp ;
     a = aElement.value
   b = bElement.value
   a = parseInt(a);
   b = parseInt(b);
     temp = a;
    a=b; 
    b =temp;
    let tempElement = document.getElementById('swap');
 tempElement.innerHTML = "swap:" + a + b ;
    }
 let addbutton = document.getElementById('add-button');
 addbutton.addEventListener('click',swap)
