// ======= <<<--- LESSON #1 -  --->>>  =======

/*
 * Ошибки - это отлично!
 * Ошибки - это помощники каждого программиста!
 * Ошибки показывают программисту, что не так и что надо исправить!
 * Хуже, когда программа не работает и не выдает ошибку!
 */

console.log("Hello!"); // строки берем в кавычки
console.log("world");
console.log("3333"); // это строка
console.log(334); // с числами можно осуществлять математические операции

console.log("Hello" + "world"); // concatenation
console.log("Hello" + " world"); // concatenation
console.log("Hello " + "world"); // concatenation
console.log("Hello" + " " + "world"); // concatenation

console.info("Hello");

// alert("Hello"); // alert позволяет выводить подсказки и сообщения!
// alert("Hello");
// alert("Hello");

// Вывод info на страницу: 2 способы
// 1. C помощью DOM
// 2. Привязка к уже готовым эллементам

// Выводим инфо на страницу с помощью innerHTML

// Для того, чтобы манипулировать элементов в HTML - мы его должны схватить
// конструкция getElementById
document.getElementById("out").innerHTML = "Hello"; // Hello
document.getElementById("out").innerHTML = 2019; // 2019
document.getElementById("out").innerHTML = "<b>2020</b>"; // 2020 жирным шрифтом

// конструкция querySelector - более гибкая конструкция, позволяет обращаться к элементу по css селектору
document.querySelector("h2.header").innerHTML = 5; // 5
document.querySelector(".header").innerHTML = 5; // 5

document.querySelector("#one").innerHTML = 777; // 777 - есть решетка при обращении к элементу
document.getElementById("one").innerHTML = 888; // 888 - нет решетки при обращении к элементу

// ПЕРЕМЕННИЯ
// Чтоб избежать длинных выражений, удобно использовать переменную
// Переменная - это типа ящик, где мы можем хранить информацию
// Переменная дает нам возможность манипулировать элементом, или какими-либо значениями не прописывая каждый раз путь к ним!
// Имя переменным стоит давать логические, чтобы они отражали суть!
// Имя переменной не может быть словом из зарезервированных слов в JS

let a = document.querySelector("#one"); // мы внутрь ящика а положили параграф
let c;
c = document.querySelector(".header");

a.innerHTML = 999; // 999
c.innerHTML = 6666; // 6666
