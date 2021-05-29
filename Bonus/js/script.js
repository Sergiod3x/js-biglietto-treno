var km = prompt("Inserisci il numero dei km");
var bDay = prompt("inserisci il tuo giorno di nascita in cifre");
var bMonth = prompt("inserisci il tuo mese di nascita i cifre");
var bYear = prompt("inserisci il tuo anno di nascita");
var priceEKm = 0.21;
var totalPrice = priceEKm * km;

var toDay = new Date();

var gday=toDay.getDate();
var gmonth = (toDay.getMonth()+1);
var gyear = toDay.getFullYear();

var age =(gyear - bYear)-1;

if(bMonth<gmonth){
    age = gyear - bYear;
} else {
    if(bMonth != gmonth){
    } else{
        if(bDay<=gday){
           age = gyear - bYear;
        }
    }
}



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



document.getElementById("out").innerHTML="Il totale è :" + priceRound +"€";


