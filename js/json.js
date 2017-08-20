'use strict';

var jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian",
            nazwisko: "Dziopa",
            wzrost: 180,
            zainteresowania: [
                {nazwa: "podroze"},
                 {nazwa: "gotowanie"}
            ]
        },
        
        {
         imie: "Wojtek",
            nazwisko: "Potocki",
            wzrost: 190,
            zainteresowania: [
                {nazwa: "sport"},
                 {nazwa: "gotowanie"}
            ]
        },

{
         imie: "Zenek",
            nazwisko: "Kowalski",
            wzrost: 160,
            zainteresowania: [
                {nazwa: "spanie"},
                 {nazwa: "ksiazki"}
            ]
        }
        
        
        
    ]
}

console.log(jsonOsoby);

jsonOsoby.osoby[2].zainteresowania.forEach(function(e, i){
    console.log(e.nazwa);
});

jsonOsoby.osoby.forEach(function(e, i) {
    console.log(e.nazwisko);
});