//Program to check whether number is divisible by 5
function div5(){

    let nElement = document.getElementById('n'),n;

    n = nElement.value
    if(n%5==0)
    {
       let divide5Element = document.getElementById('divide5');
        divide5Element.innerHTML = "number is divisible by 5:";
        
    }
    else {
        let notdivisibleElement = document.getElementById('notdivisible');
        notdivisibleElement.innerHTML = "number is not divisible by 5:";
        
    }
}
let addbutton = document.getElementById('add-button');
addbutton.addEventListener('click',div5)
