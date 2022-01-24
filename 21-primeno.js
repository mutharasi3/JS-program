//check number is prime or not
function primeno(){
let nElement = document.getElementById('n'),flag=0, prime;
n = nElement.value
n = parseInt(n);
let primeElement =document.getElementById('primenum');
for( let i=2; i<=n/2; i++)
{
    if(n%i==0){
        flag =1;
    }
}
if(flag==1)
    {
        
        primeElement.innerHTML = " not prime:" +n;
    
    }
    else if(flag==0){
 primeElement.innerHTML = "prime:" +n;
    }
}

let addbutton = document.getElementById('add-button');
addbutton.addEventListener('click',primeno)