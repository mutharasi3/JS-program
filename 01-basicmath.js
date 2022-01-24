//Addition,subtraction,multiplication and division

function mathcalculation(){
    let aElement = document.getElementById('a'),
    bElement = document.getElementById('b'),
 a,b,add,sub,multiply,divide,modulus;
    a = aElement.value
    b = bElement.value

    a = parseInt(a);
    b = parseInt(b);

    add=a+b;
    sub=a-b;
    multiply=a*b;
    divide=a/b;
    modulus=a%b;
    let addElement = document.getElementById('add'),
    subElement = document.getElementById('sub'),
    multiplyElement = document.getElementById('multiply'),
    divideElement = document.getElementById('divide'),
    modulusElement = document.getElementById('modulus');

    addElement.innerHTML="add:" + add;
    subElement.innerHTML="sub:" + sub;
    multiplyElement.innerHTML="multiply:" + multiply;
    divideElement.innerHTML="divide:" + divide;
    modulusElement.innerHTML="modulus:" + modulus;
    }
let addButton = document.getElementById('add-button'); 

addButton.addEventListener('click',mathcalculation);

 