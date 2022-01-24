//print n numbers in even numbers
function evenno(){
let n1Element = document.getElementById('n1'),
n2Element = document.getElementById('n2')
evennumbs = "even numbers:";
n1 = n1Element.value
n2 = n2Element.value
  n1 = parseInt('n1');
 n2 = parseInt('n2');
 let evennumbsElement = document.getElementById('evennumbs');
 for(i=1; i<=20; i++)
 {
     if(i%2==0){
         if(i>2){
         evennumbs = evennumbs+ "," +i;
         }
         else  evennumbs = evennumbs +i;
     }
     evennumbsElement.innerHTML = evennumbs;
 }
}
let addButton= document.getElementById('add-button');
addButton.addEventListener('click',evenno)

