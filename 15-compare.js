//Compare two numbers
function numbers(){
    let aElement = document.getElementById('a'),
    bElement = document.getElementById('b'),
    a,b;
    a = aElement.value
    b = bElement.value
    if(a>b)
    {
        let greaterElement = document.getElementById('greater');
        greaterElement.innerHTML ="a is greater than b:";
        
    }
    else if(b>a)
    {
        let greaterElement = document.getElementById('greater');
        greaterElement.innerHTML = "b is greater than a:";
        
    }
    else{
        let equalElement = document.getElementById('equal');
        equalElement.innerHTML = 'both are equal:';
    
    }
}

let addbutton = document.getElementById('add-button');
addbutton.addEventListener('click',numbers)