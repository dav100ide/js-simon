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
function hide(item) {
   item.classList.add('fade-away');
}

/* =======================
     main
========================= */
// genero un array di 5 randomici
const numbers = [];
while (numbers.length < 3) {
   const rndInteger = getRndInteger(1, 100);
   if (!numbers.includes(rndInteger)) {
      numbers.push(rndInteger);
   }
}

// stampo l'array all'utente
const numberList = document.querySelector('.number-list');
numberList.innerHTML = numbers;

// logica core

const answerList = [];
let counter = 0;
for (let i = 0; i < numbers.length; i++) {
   const answer = Number(prompt('dimmi un numero'));
   // stablisco se la risposta c'è nei numbers randomici e conto quante volte l'user ha detto la risposta giusta
   if (numbers.includes(answer)) {
      answerList.push(answer);
      counter++;
   }
}

console.log(counter, answerList);

const result = document.getElementById('result');
result.innerHTML = `hai fatto ${counter}punti, i numeri che hai indovinato sono ${answerList}`;

// timer di 30sec poi nascondo l'array all'utente
setTimeout(hide, 5000, numberList);
