// print n numbers in reverse order

function solution() {
    let nElement = document.getElementById('n'),reverseno= 'the reverse no is';
    n = nElement.value

    n = parseInt(n);

 let reverseElement = document.getElementById('reverse');
for (let i = n; i >= 1; i--){
       if (i <n) reverseno = reverseno + " , " + i;
       else reverseno =reverseno  + i;
    }

    reverseElement.innerHTML = reverseno;

}

let addButton = document.getElementById('add-button');

addButton.addEventListener('click', solution)