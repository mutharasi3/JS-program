//Program to calculate total and average


     function totalavg(){
        let rElement = document.getElementById('r'),
        m1element = document.getElementById('m1'),
        m2element = document.getElementById('m2'),
        m3element = document.getElementById('m3'),
         r,m1,m2,m3,total,average;
         r= rElement.value
    m1 = m1element.value
    m2 = m2element.value
    m3 = m3element.value        
         total = m1+m2+m3;
         let totalelement = document.getElementById('total'),
         averageelement = document.getElementById('average');

         totalelement.innerHTML = "total:" + total;

        average = total/3;
        averageelement.innerHTML = "average:" +average;
        
     }

     let addButton = document.getElementById('add-button');
     addButton.addEventListener('click',totalavg)