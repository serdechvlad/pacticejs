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
//       updateArray.push(letter.toLowerCase());
//     }
//     else {
//       updateArray.push(letter.toUpperCase());
//     }
//   }
//   return updateArray.join("");
//   }

// console.log(makeInvetedString("JavaScript"));

// напиши функцію яка із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)

// const arr = ["best", "the", "foo", "is", "js"];
// function createStringFromArr(arr) {
//   const index = arr.indexOf("foo");
//   const copyArr = arr.slice();
//   copyArr.splice(index, 1);
//   return copyArr.reverse().join(" ");
// }
// console.log(createStringFromArr(arr));
// console.log(arr);

// arr
//   .slice(0, arr.indexOf("foo"))
//   .concat(arr.slice(arr.indexOf("foo") + 1, arr.length))
//   .reverse()
//   .join(" ");

// Напиши функцію, яка приймає два масиви і повертає массив спільних значень

// const array1 = [1, 23, 3, 7, 5];
// const array2 = [3, 5, 4, 23, 9];
// function newArray(arr1, arr2) {
//   const result = [];
//   for (const item of arr1) {
//     if (arr2.includes(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }
// console.log(newArray(array1, array2));

// Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key.
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.

// const user = {
//     name: 'Igor',
//     car:  'Mercedes',
//     carColor: 'black'
// }

// const checkKeyInObject = (object, key) => {
//   return key in object;
//   for (const keyObj in object) {
//     if (keyObj === key) {
//       return true;
//     }
//   }
//   return false;
//   return Object.keys(object)
//     .includes(key);
// }

// console.log(checkKeyInObject(user, "name"));
// console.log(checkKeyInObject(user, "clon"));

// const user = {
//   name: "Peter",
//   surname: "Parker",
//   age: 22,
//   position: "spider-man",
// };

// user.getinfo = function () {
//   return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}.`;
// };

// console.log(user.getinfo());

// Є об'єкт, у якому зберігаються обрані товари у кошику.
// Напишіть код для визначення загальної суму замовлення
// і збережіть його результат у змінній totalCost.
// Якщо об'єкт cart порожній, то результат має бути 0.

// const cart = {
//   apple: 50,
//   banana: 30,
//   orange: 40,
// };

// console.log('hi');

// const values = Object.values(cart);
// const totalCost = values.reduce((acc, fruit) => acc + fruit, 0);
// console.log(totalCost);

// const myObj = {
//   name: "John",
//   age: 30,
//   gender: "male",
// };
// function getObjectKeys(object) {
//   return Object.keys(object);
// }
// const getObjectKeys = (object) => Object.keys(object);

// console.log(getObjectKeys(myObj));

// Напишіть функцію sayHi(), яка приймає в якості параметра масив імен,
// перебирає масив і додає до кожного ім'я привітання.
// Функція повертає новий масив  ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]

// const names = ['Ivan', 'Maria', 'Anna'];

// Напишіть функцію sayHi(), яка приймає в якості параметра масив імен,
// перебирає масив і додає до кожного ім'я привітання.
// Функція повертає новий масив  ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]

// const names = ['Ivan', 'Maria', 'Anna'];
// function sayHi(array) {
//     return array.map(element => `${element} привіт!`)

// }
// console.log(sayHi(names));

// const age = students.every(({age}) => age >= 18);
// console.log(age);

// Зібрати в allTopics масив всіх предметів всіх курсів.
// Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];
// const allTopics = courses
//   .flatMap((cours) => cours.topics)
//   .filter((item, index, array) => array.indexOf(item) === index);

// console, console.log(allTopics);

// 1. Напишіть функцію getAllFriendsNames(), котра поверне масив імен усіх друзів.
// 2. Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.

// const friends = [
//   {
//     passport: "03005988",
//     name: "Joseph Francis Tribbiani Jr",
//     age: 32,
//     sex: "m",
//   },
//   { passport: "03005989", name: "Chandler Muriel Bing", age: 33, sex: "m" },
//   { passport: "03005990", name: "Ross Eustace Geller", age: 33, sex: "m" },
//   { passport: "03005991", name: "Rachel Karen Green", age: 31, sex: "f" },
//   { passport: "03005992", name: "Monica Geller", age: 31, sex: "f" },
//   { passport: "03005993", name: "Phoebe Buffay", age: 34, sex: "f" },
// ];

// const getAllFriendsNames = (users) => friends.map((friend) => friend.name);

// const getAllFriendsNames = (users, gender) =>
//   friends
//     .filter((friend) => friend.sex === gender)
//     .reduce((total, friend) => total + friend.age, 0);
// console.log(getAllFriendsNames(friends, "f"));

// Маємо масив об'єктів, який представляє список замовлень:
// Завдання:
// 1. Перевірте, чи всі замовлення виконані.
// 2. Поверніть список товарів з усіх виконаних замовлень.

// const orders = [
//   { id: 1, products: ["Milk", "Bread"], status: "completed" },
//   { id: 2, products: ["Eggs", "Juice"], status: "processing" },
//   { id: 3, products: ["Pasta", "Spices"], status: "completed" },
// ];

// const checkComplited = (array) =>
//   array.every((element) => element.status === "completed");

// const allProduct = (array) =>
//   array
//     .filter((element) => element.status === "completed")
//     .flatMap((element) => element.products);

// console.log(checkComplited(orders));
// console.log(allProduct(orders));

// const posts = [
//     { title: 'Post 1', likes: 20, category: 'Tech' },
//     { title: 'Post 2', likes: 45, category: 'Fashion' },
//     { title: 'Post 3', likes: 12, category: 'Tech' },
//     { title: 'Post 4', likes: 30, category: 'Fitness' },
//     { title: 'Post 5', likes: 15, category: 'Fashion' },
//     { title: 'Post 6', likes: 50, category: 'Tech' }
//   ];

//   const allLikes = posts
//   .filter(post => post.category === 'Fashion')
//   .map(post => post.likes)
//   .reduce((sumLikes, item) => sumLikes + item, 0)

//   console.log(allLikes)
