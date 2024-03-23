// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"
// const name = 'Галина';
// const age = 35;
// const skill = 'JAVASCRIPT';
// const message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, мені ${age} років, я вивчаю ${skill}`;
// console.log(message.toLowerCase());

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const email = prompt("enter your email");
// const name = prompt("enter your name");
// const tel = prompt("enter your tel");
// const message = ` Користувач ${name}, використовує ${email}, та ${tel}. `;
// console.log(message);

// ЗАДАЧА 3
// ПОТРІБНО ЗАПИТАТИ У МАГАЗИНІ ЦІНУ ЗА КОЖЕН ОКРЕМИЙ ТОВАР, ТА ВИВЕСТИ ПОВІДОМЛЕННЯМ   ЗАГАЛЬНУ ЦІНУ ТОВАРУ

// const price1 = Number(prompt("Enter price for first item"));
// const price2 = +prompt("Enter price for second item");
// const price3 = +prompt("Enter price for third item");

// const totalPrice = price1 + price2 + price3;

// const message = `The total price for three items is ${
//   price1 + price2 + price3
// }`;

// console.log(message);


// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ: 
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ 
// "НЕ ЗНАЄТЕ? 12"

const month = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК"));
if (month === 12) {
  console.log("ВІРНО");
} else {
  console.log("НЕ ЗНАЄТЕ? 12");
}
