//print n numbers in odd
function oddno(){
let n1Element = document.getElementById('n1'),
n2Element =document.getElementById('n2'),
oddnumb = "oddnumb:";
n1 = n1Element.value
n2 = n2Element.value
n1 =parseInt('n1');
n2 = parseInt('n2');
let oddnumbElement = document.getElementById('oddnumb');
for(i = 1; i<=30; i++){
    if(i%2!=0){
        if(i>1){
        oddnumb = oddnumb+ ","+i;
    }
   else   oddnumb = oddnumb+i;
}
oddnumbElement.innerHTML = oddnumb;   
}

}
let addButton = document.getElementById('add-button');
addButton.addEventListener('click',oddno)