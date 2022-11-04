'use strict';
// Visualizzare in pagina 5 numeri casuali da 1 a 100 senza duplicati.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/* =======================
     functions
========================= */
function getRndInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function askAnswer{

}
/* =======================
     main
========================= */
// genero un array di 5 randomici
const numbers = [];
while (numbers.length < 5) {
   const rndInteger = getRndInteger(1, 100);
   if (!numbers.includes(rndInteger)) {
      numbers.push(rndInteger);
   }
}

// stampo l'array all'utente
const numberList = document.getElementById('number-list');
numberList.innerHTML = numbers;

// timer di 30sec poi chiedo all'utente i numeri che ha vista

