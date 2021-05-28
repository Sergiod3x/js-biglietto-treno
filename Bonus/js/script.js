console.log("Non sottovalutare la potenza di PlayStation");

var nameP = prompt("inserisci il tuo nome");
var surnameP = prompt("inserisci il tuo cognome");
var colorP = prompt("Inserisci il tuo colore preferito");
var giorno = prompt("inserisci il tuo giorno di nascita in cifre");
var mese = prompt("inserisci il tuo mese di nascita in cifre");
var anno= prompt("inserisci il tuo anno di nascita in cifre");


var primoF = 99991;
var primoS = 86413;
var primoT = 93187;
var a = parseInt(giorno * primoF /100000);
var b = parseInt(mese/primoS*100000) ;
var c = parseInt((primoT/anno)/1000);
var d = parseInt(100*(a+b+c) /171);


var inespugnabile = d + nameP+ a + surnameP + b + colorP + c;

document.getElementById("out").innerHTML="La tua 'inespugnabile' password :" + inespugnabile+21 ;





