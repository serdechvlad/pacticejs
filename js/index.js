'use strict'

/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

const userAnswer = prompt("Яка офіційна назва JavaScript?")
if (userAnswer === "ECMAScript") {
    alert("Вірно!")
}
else {alert("Не знаєте? ECMAScript!")}
