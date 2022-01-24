//calculate average of given numbers
function avg(){
let n1Element=document.getElementById('n1'),n2Element=document.getElementById('n2'), total=0, count=(n2-n1)+1,average=0;
n1=n1Element.value
n2 = n2Element.value
n1=parseInt(n1);
n2 = parseInt(n2);
let averageElement=document.getElementById('averageno');
averageElement.innerHTML = "Average of Numbers between " + n1 + " and " + n2 + " is: " ;


for (n1 = n1; n1 <= n2; n1++)
    total = total + n1;
    
average = total / count;
averageElement.innerHTML=("Total Sum: " + total);
averageElement.innerHTML=("No. of elements: " + count);
averageElement.innerHTML="Average: " + average;
}
let addbutton = document.getElementById('add-button');
addbutton.addEventListener('click',avg)