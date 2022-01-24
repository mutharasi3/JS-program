///factorial of a number using for loop
function factno(){
let  nElement = document.getElementById('n'),i,fact=1;
n = nElement.value
n =parseInt(n);
let factElement = document.getElementById('fact');
for(i=1; i<=n; i++){
fact =fact*i;
console.log("factorial of a number is",fact);
}
factElement.innerHTML=fact;
}
let addbutton = document.getElementById('add-button');
addbutton.addEventListener('click',factno)