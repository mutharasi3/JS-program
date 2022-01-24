//program to calculate area of circle


function shape(){
    const pi= 3.14;
    let  
    rElement = document.getElementById('r'),r,area;

    r=rElement.value


    area= 3.14 * r * r;
    let areaElement = document.getElementById('area');

    areaElement.innerHTML='area of circle with radius:' + r +' is: '+ area;
    console.log();
}

let addButton = document.getElementById('add-button');

addButton.addEventListener('click',shape)