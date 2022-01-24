//Program to check number is positive or not
function positiveno(){
    let nElement = document.getElementById('n'),
    n ;
    n = nElement.value
    if(n>0)
    {
        let positiveElement = document.getElementById('positive');
    
positiveElement.innerHTML = "the number is positive:"   + n;
    
    }
    else if(n<0)
    {
        let     negativeElement = document.getElementById('negative');
        negativeElement.innerHTML ="the number is negative:" + n;
        
    }
    else
    {
        let zeroElement = document.getElementById('zero');
        zeroElement.innerHTML = "the number is zero:" + n;
    }
}

let addbutton = document.getElementById('add-button');
addbutton.addEventListener('click', positiveno)
