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
const time = prompt("введіть число");
const hours = String(Math.floor(time / 60)).padStart(2, "0");
console.log(hours);


 *? У змінній min лежить число від 0 до 59.
 *? Визначте, в яку чверть години потрапляє
 *? це число (у першу, другу, третю чи четверту).
 */
const min = 22;
if (min <= 15) {
  console.log("Перша четверть");
}
if (min > 15 && min <= 30) {
  console.log("Друга четверть");
}
if (min > 30 && min <= 45) {
  console.log("Третя четверть");
}
if (min > 45 && min <= 60) {
  console.log("Четверта четверть");
}
 *? У змінній min лежить число від 0 до 59.
 *? Визначте, в яку чверть години потрапляє
 *? це число (у першу, другу, третю чи четверту).
 */
const min = 22;
if (min <= 15) {
  console.log("Перша четверть");
}
if (min > 15 && min <= 30) {
  console.log("Друга четверть");
}
if (min > 30 && min <= 45) {
  console.log("Третя четверть");
}
if (min > 45 && min <= 60) {
  console.log("Четверта четверть");
}

