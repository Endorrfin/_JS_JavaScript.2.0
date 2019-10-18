// ======= <<<--- LESSON #2 -  --->>>  =======

/*
 *
 *
 */

let a = 6;
let b = "Hello";

console.log(a);

// Как получить информацию со страницы? Один из вариантов input
// Task
// После того, как пользователь введет данные в input мы должны увидеть эти данные в консоли и очистить элемент input

let inputIn = document.querySelector(".input-in"); // input
let button = document.querySelector("button"); // button
let div = document.querySelector(".out");

button.onclick = function() {
  //кнопка будет нажата
  console.log("работает!!!");
  // console.log(inputIn.value); // value - это то, что введено в input

  let b = +inputIn.value; // + - для преобразования в число
  console.log(b + 10);

  // выводим (сохраняем) ввод в input
  div.innerHTML = b;

  // Очищаем input
  inputIn.value = "";
};
