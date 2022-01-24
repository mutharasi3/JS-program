// Print N numbers in sequence

function solution() {
    let nElement = document.getElementById('n'),
    
        n, sequenceNO ='the sequence no:';
    n = nElement.value

    n = parseInt(n);

 let sequenceElement = document.getElementById('sequence');
for (let i = 1; i <= n; i++){
       if (i > 1) sequenceNO = sequenceNO + " , " + i;
       else sequenceNO =sequenceNO  + i;
    }

    sequenceElement.innerHTML = sequenceNO;

}

let addButton = document.getElementById('add-button');

addButton.addEventListener('click', solution)