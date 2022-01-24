//Program for Quadratic Equation
function quad(){
let aElement = document.getElementById('a'),
bElement = document.getElementById('b'),
 cElement = document.getElementById('c'),r1,r2,x;
x = b*b - 4*a *c;
r1 =(-b+x)/2*a;
r2 =(-b-x)/2*a;
let quadElement = document.getElementById('quad');
if(x>0)
{
    quadElement.innerHTML = "roots are unequal:";

}
else if(x<0)
{
    quadElement.innerHTML = "roots are imaginary:";
}
else{
    quadElement.innerHTML = "roots are same:";
}

}
let addbutton = document.getElementById('add-button');
addbutton.addEventListener('click',quad)