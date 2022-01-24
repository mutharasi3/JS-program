// calculate sum of a number
function sumnum(){
    let nElement = document.getElementById('n'),
  sum = 0;
    n = nElement.value
    n = parseInt(n);
    let sumElement = document.getElementById('sumno');
    for(i=1; i<=n; i++){
    sum=sum+i;
    }
    sumElement.innerHTML = 'the sum of number:' +i;
}
let addbutton = document.getElementById('add-button');
addbutton.addEventListener('click',sumnum)