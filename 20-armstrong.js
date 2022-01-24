//check number is Armstrong or not
function arm(){
let nElement = document.getElementById('n'),n ,r, sum=0,temp;
n = nElement.value
temp=n;
let armstrongElement = document.getElementById('armstrong');
while(n>0){
    r=n%10;
    sum = sum+(r*r*r);
    n=Math.floor(n/10);
}
if(temp==sum)
armstrongElement.innerHTML ='armstrong number';
else armstrongElement.innerHTML ="not armstrong number:";
}
let addbutton = document.getElementById('add-button');
addbutton.addEventListener('click',arm)

