'use strict';

var osoba = {
    
    imie:"wojtek",
    wzrost: 181,
    przedstawOsobe: function () {
        console.log("Cześć jestem " + this.imie + ", mam " + this.wzrost + " wzrostu.");
    }
}

console.log(osoba.imie);
console.log(osoba.wzrost);

osoba.imie = "Adam";

console.log(osoba ["imie"]);
console.log(osoba ["wzrost"]);


console.log(osoba.przedstawOsobe());