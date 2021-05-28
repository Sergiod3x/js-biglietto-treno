console.log("Non sottovalutare la potenza di PlayStation");

var km = prompt("Inserisci il numero dei km");
var age = prompt("inserisci il numero dei tuoi anni");
var priceEKm = 0.21;
var totalPrice = priceEKm * km;

if(age>65){
    var totalPriceDis = totalPrice * 0.6; //40% di sconto
}else{
    if(age<18){
        var totalPriceDis = totalPrice * 0.8; //20% di sconto
    } else{
        var totalPriceDis = totalPrice;
    }
}
var priceRound =Math.round (totalPriceDis * 100) / 100;



document.getElementById("out").innerHTML="Il totale è :" + priceRound +"€" ;


