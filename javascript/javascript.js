//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.276 € al km)
//va applicato uno sconto del 21% per i minorenni
//va applicato uno sconto del 42% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) [questo richiederà un minimo di ricerca]

const chilometri = prompt('inserire chilometri da percorere');
const età = prompt('inserire età');
const prezzo = chilometri * 0.276;

if(età < 18){
    sconto = (prezzo/100) * 21;
    prezzoFinale = prezzo - sconto;
} else if (età >= 65) {
    sconto = (prezzo/100) * 42;
    prezzoFinale = prezzo - sconto;
} else {
    console.log(prezzo)
}

console.log(chilometri, età, prezzo, prezzoFinale);