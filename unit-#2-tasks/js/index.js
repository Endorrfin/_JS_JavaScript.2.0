
/* UNIT №1.*/

/**
|--------------------------------------------------
| ======= <<<--- TASK #1 -  --->>>  =======
|--------------------------------------------------
*/

/* Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b. */
const a = 7;
const b = 9;
console.log(a * b); // 63
/**
|--------------------------------------------------
| ======= <<<--- TASK #2 -  --->>>  =======
|--------------------------------------------------
*/
/* Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d. */
const c = 7;
const d = 9;
console.log(c / d); // 0.7777777777777778

/**
|--------------------------------------------------
| ======= <<<--- TASK #3 -  --->>>  =======
|--------------------------------------------------
*/
/* Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f. */

const e = 3;
const f = 5;
document.querySelector(".unit2Task3").innerHTML = e + f;
/**
|--------------------------------------------------
| ======= <<<--- TASK #4 -  --->>>  =======
|--------------------------------------------------
*/
/* Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу. */
const e1 = '3';
const f1 = 5;
document.querySelector('.unit2Task4').innerHTML = e1 + f1; // 35 - происходит конкатенация строк, поскольку 1 из аргументов строка


/**
|--------------------------------------------------
| ======= <<<--- TASK #5 -  --->>>  =======
|--------------------------------------------------
*/
/*
/* Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2. */
const e2 = 3;
const f2 = 0;
document.querySelector('.unit2Task5').innerHTML = e2 / f2; // Infinity

/**
|--------------------------------------------------
| ======= <<<--- TASK #6 -  --->>>  =======
|--------------------------------------------------
*/
/* Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных. */
const e3 = 3;
const f3 = "Hello"
document.querySelector('.unit2Task6').innerHTML = e3 + f3; // 3Hello - результат конкатенации строк.

/**
|--------------------------------------------------
| ======= <<<--- TASK #7 -  --->>>  =======
|--------------------------------------------------
*/

/* Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.*/
const e4 = 3;
const f4 = 'Hello';
document.querySelector('.unit2Task7').innerHTML = e4 * f4; // NaN

/**
|--------------------------------------------------
| ======= <<<--- TASK #8 -  --->>>  =======
|--------------------------------------------------
*/

/*  Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input. */
const inputTextTask8 = document.querySelector('.inputUnit2Task8-1');
const clickButtonTask8 = document.querySelector('.inputUnit2Task8-2');
clickButtonTask8.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(inputTextTask8.value); // выводим в консоль содержимое результата ввода в input
});
 
/**
|--------------------------------------------------
| ======= <<<--- TASK #9 -  --->>>  =======
|--------------------------------------------------
*/

/* Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.*/
const inputTextTask9 = document.querySelector('.inputUnit2Task9-1');
const clickButtonTask9 = document.querySelector('.inputUnit2Task9-2');
const outputTextTask9 = document.querySelector('.outputUnit2Task9');
clickButtonTask9.addEventListener('click', (e) => {
  e.preventDefault();
  outputTextTask9.innerHTML = inputTextTask9.value;
  inputTextTask9.value = '';
});


/**
|--------------------------------------------------
| ======= <<<--- TASK #10 -  --->>>  =======
|--------------------------------------------------
*/

/* Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10. */
const inputTextTask10 = document.querySelector('.inputUnit2Task10-1');
const clickButtonTask10 = document.querySelector('.inputUnit2Task10-2');
const outputTextTask10 = document.querySelector('.outputUnit2Task10');
clickButtonTask10.addEventListener('click', (e) => {
  e.preventDefault();
  outputTextTask10.innerHTML = (Number(inputTextTask10.value * 10));
  inputTextTask10.value = '';
});

/**
|--------------------------------------------------
| ======= <<<--- TASK #11 -  --->>>  =======
|--------------------------------------------------
*/

/* Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10.*/
const inputTextTask11 = document.querySelector('.inputUnit2Task11-1');
const clickButtonTask11 = document.querySelector('.inputUnit2Task11-2');
const outputTextTask11 = document.querySelector('.outputUnit2Task11');
clickButtonTask11.addEventListener('click', (e) => {
  e.preventDefault();
  outputTextTask11.innerHTML = +inputTextTask11.value + 10;
  inputTextTask11.value = '';
});

/**
|--------------------------------------------------
| ======= <<<--- TASK #12 -  --->>>  =======
|--------------------------------------------------
*/

/* Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.*/

const clickButtonTask12 = document.querySelector('.buttonUnit2Task12-2');
clickButtonTask12.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector('.inputNameUnit2Task12-1').value;
  const surname = document.querySelector('.inputSurnameUnit2Task12-1').value;
  console.log('Hello' + " " + name + " " + surname);
});

/**
|--------------------------------------------------
| ======= <<<--- TASK #13 -  --->>>  =======
|--------------------------------------------------
*/

/* Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу. */
// let buttonSum = document.querySelector('.button13');

const clickButtonTask13 = document.querySelector('.buttonUnit2Task13-2');
clickButtonTask13.addEventListener('click', (e) => {
  e.preventDefault();
  const inputNumberOne = document.querySelector('.inputNumber1Unit2Task13-1').value;
  const inputNumberTwo = document.querySelector('.inputNumber2Unit2Task13-1').value;
  const numberOne = parseInt(inputNumberOne);
  const numberTwo = parseInt(inputNumberTwo);
  const result = numberOne + numberTwo;
  document.querySelector('.outputUnit2Task13').innerHTML = result;
});

/**
|--------------------------------------------------
| ======= <<<--- TASK #14 -  --->>>  =======
|--------------------------------------------------
*/
// Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.
const clickButtonTask14 = document.querySelector('.buttonUnit2Task14-2');
clickButtonTask14.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.inputNumber1Unit2Task14-1').value = 'Hello';
});

/**
|--------------------------------------------------
| ======= <<<--- TASK #15 -  --->>>  =======
|--------------------------------------------------
*/

/* Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.*/
const y = document.querySelector('.inputNumber1Unit2Task15-1');
y.style.border = '2px solid red'; // устанавливаем элементу html input bykfqyjdsq стиль css.

/**
|--------------------------------------------------
| ======= <<<--- TASK #16 -  --->>>  =======
|--------------------------------------------------
*/
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел.
const clickButtonTask16 = document.querySelector('.buttonUnit2Task16-2');
clickButtonTask16.addEventListener('click', (e) => {
  e.preventDefault();
  const inputNumberOne = document.querySelector('.inputNumber1Unit2Task16-1').value;
  const inputNumberTwo = document.querySelector('.inputNumber2Unit2Task16-1').value;
  const result = parseInt(inputNumberOne) + parseInt(inputNumberTwo);
  document.querySelector('.outputUnit2Task16').innerHTML = result;
});

/**
|--------------------------------------------------
| ======= <<<--- TASK #17 -  --->>>  =======
|--------------------------------------------------
*/

/* 
Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
*/
const clickButtonTask17 = document.querySelector('.buttonUnit2Task17-2');
clickButtonTask17.addEventListener('click', (e) => {
  e.preventDefault();
  const inputValue = document.querySelector('.inputValueUnit2Task17-1').value;
  const t = parseInt(inputValue);
  console.log(t); //Функция parseInt преобразует значение в целое число, если значение начинается с цифр, в противном случае возвращает NaN.
});


/**
|--------------------------------------------------
| ======= <<<--- TASK #18 -  --->>>  =======
|--------------------------------------------------
*/

/* Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод. */

const clickButtonTask18 = document.querySelector('.buttonUnit2Task18-2');
clickButtonTask18.addEventListener('click', (e) => {
  e.preventDefault();
  const inputValue = document.querySelector('.inputValueUnit2Task18-1').value;
  const t = parseFloat(inputValue);
  console.log(t); //Функция parseFloat преобразует значение в число, включая дробное число, если значение начинается с цифр, если с не цифр или букв возвращает NaN.
});

/**
|--------------------------------------------------
| ======= <<<--- TASK #19 -  --->>>  =======
|--------------------------------------------------
*/

/* Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. */
const clickButtonTask19 = document.querySelector('.buttonUnit2Task19-2');
clickButtonTask19.addEventListener('click', (e) => {
  e.preventDefault();
  const inputNumberOne = document.querySelector('.inputNumber1Unit2Task19-1').value;
  const inputNumberTwo = document.querySelector('.inputNumber2Unit2Task19-1').value;
  const result = parseInt(inputNumberOne) + parseInt(inputNumberTwo);
  document.querySelector('.outputUnit2Task19').innerHTML = result;

  document.querySelector('.inputNumber1Unit2Task19-1').value = '';
  document.querySelector('.inputNumber2Unit2Task19-1').value = '';
});


/**
|--------------------------------------------------
| ======= <<<--- TASK #20 -  --->>>  =======
|--------------------------------------------------
*/

/* Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов. */
// let name = document.querySelector('.input20-name');
// let surname = document.querySelector('.input20-surname');
// let age = document.querySelector('.input20-age');
// let occup = document.querySelector('.input20-occup');
// let button20 = document.querySelector('.button20');
// button20.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector('.output20').innerHTML = `Уважаемый ${name.value}, ${surname.value}, Ваш возраст ${age.value} лет, по профессии Вы ${occup.value} `;
// });

const clickButtonTask20 = document.querySelector('.buttonUnit2Task20-2');
clickButtonTask20.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector('.inputNameUnit2Task20-1').value;
  const surname = document.querySelector('.inputSurnameUnit2Task20-1').value;
  const age = document.querySelector('.inputAgeUnit2Task20-1').value;
  const occupation = document.querySelector('.inputOccupationUnit2Task20-1').value;
  console.log("Уважаемый" + " " + name + " " + surname + " " + "Ваш возраст" + " " + age + " " + "Ваш род занятий" + " " + occupation);
  document.querySelector('.inputNameUnit2Task20-1').value = " ";
  document.querySelector('.inputSurnameUnit2Task20-1').value = " ";
  document.querySelector('.inputAgeUnit2Task20-1').value = " ";
  document.querySelector('.inputOccupationUnit2Task20-1').value = " ";
});

// Вопросы:
// 1. правильно ли использование element.addElementListener('evt',  function) вместо конструкции element.on"событие" в 99% случаев? Как я понимаю addEventListener позволяет вешать несколько обработчиков на элемент.
// 2. В 20-й задаче в поле возраст можно внести 31 (год), 33 (года), 36(лет). окончание возраста реализуется посредством JS? Нужно ли было делать это в задаче?
// Еще раз огромное спасибо Вам Александр за уроки. Самое ценное в них это последовательное изучение материала с закреплением в задачах. Я не особо читаю чат в телеграмме. Стараюсь сам разбираться.