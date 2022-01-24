//Program to check number is greater than 10
function great(){
    let 
    nElement = document.getElementById('n'),n;
    n = nElement.value
    if(n>10)
    {
        let greaterElement = document.getElementById('greater');
        greaterElement.innerHTML = "the number is greater than 10:";
        
    }
    else if(n<10)
    {
        let lessElement = document.getElementById('less');
        lessElement.innerHTML = "the number is less than 10:";
        
    }
    else{
        greaterElement =document.getElementById('greater');
        greaterElement.innerHTML = "equal to 10:";
    }
}

let addbutton =document.getElementById('add-button');
addbutton.addEventListener('click',great)