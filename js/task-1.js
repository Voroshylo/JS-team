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

// const month = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК"));
// if (month === 12) {
//   console.log("ВІРНО");
// } else {
//   console.log("НЕ ЗНАЄТЕ? 12");
// }

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ВИЗНАЧАТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО , ЧИ НЕ ПАРНЕ.

// const number = Number(prompt("Введіть число"));

// if (number % 2 === 0) {
//   console.log("Число парне");
// } else {
//   console.log("Число не парне");
// }

// const firstNumber = number % 2 === 0 ? "Число парне" : "Число не парне";
// console.log(firstNumber);

// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// let birthMonth = Number(prompt("Введіть ваш місяць народження"));

// if (birthMonth === 12 || birthMonth === 1 || birthMonth === 2) {
//   console.log("Ти народився зимою");
// } else if (birthMonth >= 3 && birthMonth <= 5) {
//   console.log("Ти народився весною");
// } else if (birthMonth >= 6 && birthMonth <= 8) {
//   console.log("Ти народився літом");
// } else if (birthMonth >= 9 && birthMonth <= 11) {
//   console.log("Ти народився осінню");
// } else {
//   console.log("Введіть вірний місяць вашого народження");
// // }
// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99

const periodSubscription = prompt('Який у вас період підписки: день, тиждень, місяць чи рік?').toLowerCase();
switch (periodSubscription) {
  case "день":
    console.log("1.99");
    break;
  case "тиждень":
    console.log("5.99");
    break;
  case "місяць":
    console.log("10.99");
    break;
  case "рік":
    console.log("100.99");
    break;
  default: 
    console.log("Error");
}
