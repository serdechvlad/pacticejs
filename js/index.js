"use strict";

/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

// const userAnswer = prompt("Яка офіційна назва JavaScript?")
// if (userAnswer === "ECMAScript") {
//     alert("Вірно!")
// }
// else {alert("Не знаєте? ECMAScript!")}

/**
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 */
// const time = prompt("введіть число");
// const hours = String(Math.floor(time / 60)).padStart(2, "0");
// console.log(hours);

/*? У змінній min лежить число від 0 до 59.
 *? Визначте, в яку чверть години потрапляє
 *? це число (у першу, другу, третю чи четверту).
 */
// const min = 1;
// if (min <= 15) {
//   console.log("Перша четверть");
// }
// if (min > 15 && min <= 30) {
//   console.log("Друга четверть");
// }
// if (min > 30 && min <= 45) {
//   console.log("Третя четверть");
// }
// if (min > 45 && min <= 60) {
//   console.log("Четверта четверть");
// }

// ~ TODO:==========================
// Напиши функцію findSmallerNumber(numbers)
// яка приймає массив numbers, шукає найменше число в масиві і повертає це число.

// const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];

// function findSmallerNumber(arr) {
//   let min = arr[0];
//   for (const item of arr) {
//     if (item < min) {
//       min = item;
//     }
//   }
//   return min;
// }
// const result = findSmallerNumber(numbers);
// console.log(result);

//Напишіть функцію unique(arr), приймає масив рядків і повертає масив унікальні елементів.

// const words = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "CSS",
//   "JS",
//   "Node.js",
//   "JS",
//   "React",
//   "CSS",
//   "React",
//   "HTML",
//   "Node.js",
// ];

// function unique(arr) {
//   const array = [];

//   for (const word of arr) {
//     if (!array.includes(word)) {
//       array.push(word);
//     }
//   }
//   return array;
// }

// console.log(unique(words));

//^ TODO:==========================
//Напишіть функцію makeInvetedString(), яка замінює регістр кожного символу
//у рядку на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

// function makeInvetedString(string) {
//   const newArray = string.split("");
//   const updateArray = []; 
//   for (let letter of newArray) {  
     
//     if (letter === letter.toUpperCase()) {     
//       letter = letter.toLowerCase();
//       updateArray.push(letter);
//     }
//     else {
//       letter = letter.toUpperCase();
//       updateArray.push(letter);
//     }    
//   }
//   return updateArray.join("");
//   }

// console.log(makeInvetedString("JavaScript"));