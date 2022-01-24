

// program to print prime numbers between the two numbers
function primee(){
let lowerNumberElement = document.getElementById('lowerNumber'),
higherNumberElement = document.getElementById('higherNumber'),i;
lowerNumber = lowerNumberElement.value
higherNumber = higherNumberElement.value
lowerNumber = parseInt(lowerNumber);
higherNumber = parseInt(higherNumber);
let primeElement = document.getElementById('primeno');


for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
}
let addbutton= document.getElementById('prime-btn');
addbutton.addEventListener('click',primee)