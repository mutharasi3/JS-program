//Print grade based on marks of a student
function grade(){
let rElement = document.getElementById('r'),
tElement = document.getElementById('t'),
eElement = document.getElementById('e'),
mElement = document.getElementById('m'),
r,t,e,m,A,B,C,total,average;
r = rElement.value
 t = tElement.value
 e = eElement.value   
 m = mElement.value
 t = parseInt(t);
 e = parseInt(e);
 m = parseInt(m);
total = t + e + m;

 totalElement = document.getElementById('total');
totalElement.innerHTML="total:" + total;
average = total/3;
 averageElement = document.getElementById('average');
 averageElement.innerHTML = "average:" + average;
if(average>=60)
{
    averageElement = document.getElementById('average');
    averageElement.innerHTML = 'grade is A:' ;
}
else if((average>=50)&&(average<=60))
{
    averageElement = document.getElementById('average')
    averageElement.innerHTML = 'grade is B:';
    }
    else{
        averageElement = document.getElementById('average');
        averageElement.innerHTML = "grade is C:";
    }
    
}
 
 let addbutton = document.getElementById('add-button');
 addbutton.addEventListener('click',grade)

