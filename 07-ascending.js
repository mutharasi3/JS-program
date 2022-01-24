//program for ascending order for three numbers
function ascendingordescending() {
    let aElement = document.getElementById('a'),
        bElement = document.getElementById('b'),
        cElement = document.getElementById('c'),

        a, b, c, ascendingorder, descendingorder;

    a = aElement.value
    b = bElement.value
    c = cElement.value

    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let ascendingorderElement = document.getElementById('ascendingorder'),
                descendingorderElement = document.getElementById('descendingorder' );
    if (a > b && a > c) {
        if (b > c) {

            ascendingorderElement.innerHTML = 'ascendingorder' + c , + b , + a;
                descendingorderElement.innerHTML = 'descendingorder' + a , + b , + c;
        }
        else {

            ascendingorderElement.innerHTML = 'ascendingorder' + b + "," + c + "," + a;
            descendingorderElement.innerHTML = 'descendingorder' + a + "," + c + "," + b;
        }
    }
    else if (b > c && b > a) {
        if (c > a) {

            ascendingorderElement.innerHTML = 'ascendingorder' + a + "," + c + "," + b;
                descendingorderElement.innerHTML = 'descendingorder' + b + "," + c + "," + a;
        }
        else {
            ascendingorderElement.innerHTML = 'ascendingorder' + c + "," + a + "," + b;
                descendingorderElement.innerHTML = 'descendingorder' + b + "," + a + "," + c;
        }
    }
    else if (c > a && c > b) {
        if (a > b) {
            ascendingorderElement.innerHTML = 'ascendingorder' + b + "," + a + "," + c;
                descendingorderElement.innerHTML = 'descendingorder' + c + "," + a + "," + b;
        }
        else {
            ascendingorderElement.innerHTML = 'ascendingorder' + a + "," + b + "," + c;
                descendingorderElement.innerHTML = 'descendingorder' + c + "," + b + "," + a;
        }
    }



}
let addbutton = document.getElementById('add-button');
addbutton.addEventListener('click', ascendingordescending);