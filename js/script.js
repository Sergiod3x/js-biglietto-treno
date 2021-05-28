console.log("Non sottovalutare la potenza di PlayStation");

var km = prompt("Inserisci il numero dei km");
var age = prompt("inserisci il numero dei tuoi anni");
var priceEKm = 0.21;
var totalPrice = priceEKm * km;
var priceRound =Math.round (totalPrice * 100) / 100



document.getElementById("out").innerHTML="Il totale è :" + priceRound +"€" ;


