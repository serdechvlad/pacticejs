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

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
