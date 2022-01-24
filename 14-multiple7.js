//To check whether number is multiple of 7
function multiple7(){
let nElement = document.getElementById('n'), n;
n = nElement.value
    if(n%7==0){
        let multiple7Element= document.getElementById('multiple7');
        multiple7Element.innerHTML = 'number is multiple of 7:'+n;
    }
    else{
        let notmultipleElement = document.getElementById('notmultiple');
        notmultipleElement.innerHTML = 'number is not multiple of 7:'+n;
    }
}
let addbutton= document.getElementById('add-button');
addbutton.addEventListener('click',multiple7)