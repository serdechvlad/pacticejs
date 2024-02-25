//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
const alertButtonRef = document.querySelector("#alertButton");
const alertInputRef = document.querySelector("#alertInput");

alertButtonRef.addEventListener("click", onAlertBtnClick);

function onAlertBtnClick() {
  alert(alertInputRef.value);
}

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
const buttonRef = document.querySelector("#swapButton");
const firstInputRef = document.querySelector("#leftSwapInput");
const secondInputRef = document.querySelector("#rightSwapInput");

buttonRef.addEventListener("click", change);

function change() {
  const firstInputValue = firstInputRef.value;
  const secondInputValue = secondInputRef.value;
  secondInputRef.value = firstInputValue;
  firstInputRef.value = secondInputValue;
}
//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
const passwordInputRef = document.querySelector("#passwordInput");
const passwordButtonRef = document.querySelector("#passwordButton");

passwordButtonRef.addEventListener("click", () => {
  if (passwordInputRef.type === "password") {
    passwordInputRef.type = "text";
    passwordButtonRef.textContent = "Приховати";
    return;
  }
  passwordInputRef.type = "password";
  passwordButtonRef.textContent = "Розкрити";
});

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/
const boxRef = document.querySelector("#box");
const decreaseRef = document.querySelector("#decrease");
const increaseRef = document.querySelector("#increase");
decreaseRef.addEventListener("click", () => {
  const size = parseInt(getComputedStyle(boxRef).width);
  boxRef.style.width = size - 10 + "px";
  boxRef.style.height = size - 10 + "px";
});
increaseRef.addEventListener("click", () => {
  const size = parseInt(getComputedStyle(boxRef).width);
  boxRef.style.width = size + 10 + "px";
  boxRef.style.height = size + 10 + "px";
});
//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/
const placeRef = document.querySelector("#place");
window.addEventListener("click", handleClick);

function handleClick(event) {
  // if (placeRef === event.target) {
  //   console.log(true);
  // }
  // if (event.target.id === "place") {
  //   console.log(true);
  // }
  if (event.target.nodeName === "DIV") {
    console.log(true);
  }
}
//   console.log(event.currentTarget);
//   console.log(event.target);
// }
//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

const listRef = document.querySelectorAll(".list .listItem");
const listButtonRef = document.querySelector("#double");

listButtonRef.addEventListener("click", double);

function double() {
  listRef.forEach(
    (item) => (item.textContent = BigInt(item.textContent) ** 2n)
  );
}

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
