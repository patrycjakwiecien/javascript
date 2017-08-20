'use strict';

function mutiply(param1, param2, param3){
    var result = param1 * param2 * param3;
    console.log(result);

}

mutiply(3, 9, 10);







function mutiply(param1, param2, param3){
    var result = param1 * param2 * param3;
  return result;
}

var wynik = mutiply(1, 9, 10);
 console.log(wynik);

var funkcja = function() {
    return "wynik :)";
}

console.log(funkcja);
console.log(funkcja());