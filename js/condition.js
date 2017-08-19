'use strict';

var wzrostMateusz = 190;
var wzrostOlgi = 190;

/*Warunek if */

if(wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest niższa");
}

/*Warunek if else */

if(wzrostOlgi < wzrostMateusz && true) {
    console.log("Olga jest niższa");
} else {
    console.log("Olga jest wyższa");
}

/*Warunek if else if */

if(wzrostOlgi < wzrostMateusz && true) {
    console.log("Olga jest niższa");
} else if (wzrostOlgi == wzrostMateusz) {
    console.log("Olga jest tak wysoka jak mateusz :)");
}
else {
    console.log("Olga jest wyższa");
}


var kolor = 'zielony';
switch (kolor){
    case 'czerwony':
        console.log('kolor czerwony');
        break;
        case 'zielony':
        console.log('kolor czerwony');
        break;
        case 'niebieski':
        console.log('kolor czerwony');
        break;
    default:
        console.log('Inny kolor');
             }



var kolor = 'czarny';
switch (kolor){
    case 'czerwony':
        console.log('kolor czerwony');
        break;
        case 'zielony':
        console.log('kolor zielony');
        break;
        case 'niebieski':
        console.log('kolor niebieski');
        break;
    default:
        console.log('Inny kolor');
             }



