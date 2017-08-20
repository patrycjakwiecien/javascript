'use strict'

function mnozenie(tablicaLiczb){
    var iloczyn = 1; //liczba, przez ktora mnozymy
    
    tablicaLiczb.forEach( //petla przechodzi przez kazdy element po kolei, skrot dla "for" w "funkcje"
        function(element, index){
        iloczyn *= element; //iloczyn=iloczyn*element
        
        
        
    });
    
    //element - dany element tablicy, po ktorym obecnie znajduje sie petla (dla pierwszego obiegu jest to pierwszy element, dla drugiego obiegu drugi element itd) 
    
    //index - indeks danego elementu w tablicy, na ktorym obecnie znajduje sie petla (dla pierwszego obiegu jest to indeks 0, dla drugiego obiegu jest to indek 1)
    
    return iloczyn;
    
}

var tablica = [4, 5, 10, 8];

console.log(mnozenie(tablica));

//4,5,8,10
//4*5=20
//20*10=200
//200*8=1600
//4.koniec