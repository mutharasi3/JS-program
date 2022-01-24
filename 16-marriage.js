//program for marriage eligibility
function solution(){
    let GenderElement = document.getElementById('Gender'),
        AgeElement = document.getElementById('Age'),
        Gender, Age, MarriageElement;

    Gender = GenderElement.value
    Age = AgeElement.value

    if ((Gender == 'Male') && (Age >= 23)){
        MarriageElement = document.getElementById('Marriage');
        MarriageElement.innerHTML = "You Can Marry";
    }

    else if ((Gender == 'Female') && (Age >= 21)){
        MarriageElement = document.getElementById('Marriage');
        MarriageElement.innerHTML = "You Can Marry";
    }

    else{
        MarriageElement = document.getElementById('Marriage');
        MarriageElement.innerHTML = "You Can Not Marry";
    }
}

let addButton = document.getElementById('add-button');

addButton.addEventListener('click', solution)