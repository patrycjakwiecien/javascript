'use strict';

/* petala for*/

var imiona = ['Wojtek', 'Adam', 'Zenek'];

for(var i = 0; i < imiona.length; i++) {
    //console.log(imiona[i]);
}

imiona.forEach(function(element, index){
    console.log(index + ": " + element);
});


/* petla while*/
var i = 0;
while(i < 3) {
    console.log(i);
    i++;
}


/* petla do while-break*/
var j = 10;
do {
    console.log(j);
    j++;
} while(j <10)
    
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++){
            console.log("i: " + i + "j: " + j);
            break;
        }
    }



console.log('koniec');


/*continue*/

  for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++){
            console.log("i: " + i + "j: " + j);
            if(j % 2 == 0) {
                continue;
            }
            console.log("koniec obiegu");
        }
    }





