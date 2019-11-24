// ======= <<<--- LESSON #3 -  --->>>  =======

/*
 * Любоя программа рано, или поздно не может выполняться последовательно.
 * придется делать условия, в зависимости от действий пользователя.
 */

// let a = 6;
// if (a > 9) {
//   // true
//   console.log("Yes");
// } else {
//   console.log("else");
// }

const button = document.querySelector("button");
const input = document.querySelector(".age");

// Анониманя функция
// Функция, которая не имеет имени
// Анониманя функция используетмся в коде всего 1 раз

// () => стрелочкая функция
button.onclick = () => {
  // Чтобы мы не вводили в input, оно интерпретируется, как строка
  let num = +input.value;
  if (num >= 16 && num < 60) {
    // с помощью булевых операторов можно задать диапазон
    console.log("Welcome!");
  } else if (num >= 60) {
    console.log("Ты точно сюда?");
  } else {
    console.log("Ты не пройдешь!!!");
  }

  // Конструкция switch

  switch (num) {
    case 15:
      console.log("Потерпи еще годик");
      break;
    case 16:
      console.log("Ураааа можно!");
      break;
    default:
      console.log("oooook!");
  }
};

let b = 5;
console.log(b == 7);
console.log(b !== 7);
console.log(b > 3 && b < 7);
console.log(b == 3 || b !== 7);
