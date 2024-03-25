// // // ЗАДАЧА 1
// // // НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"
// // // const name = 'Галина';
// // // const age = 35;
// // // const skill = 'JAVASCRIPT';
// // // const message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, мені ${age} років, я вивчаю ${skill}`;
// // // console.log(message.toLowerCase());

// // // ЗАДАЧА 2
// // // ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// // // const email = prompt("enter your email");
// // // const name = prompt("enter your name");
// // // const tel = prompt("enter your tel");
// // // const message = ` Користувач ${name}, використовує ${email}, та ${tel}. `;
// // // console.log(message);

// // // ЗАДАЧА 3
// // // ПОТРІБНО ЗАПИТАТИ У МАГАЗИНІ ЦІНУ ЗА КОЖЕН ОКРЕМИЙ ТОВАР, ТА ВИВЕСТИ ПОВІДОМЛЕННЯМ   ЗАГАЛЬНУ ЦІНУ ТОВАРУ

// // // const price1 = Number(prompt("Enter price for first item"));
// // // const price2 = +prompt("Enter price for second item");
// // // const price3 = +prompt("Enter price for third item");

// // // const totalPrice = price1 + price2 + price3;

// // // const message = `The total price for three items is ${
// // //   price1 + price2 + price3
// // // }`;

// // // console.log(message);


// // // ЗАДАЧА 4
// // // ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// // // "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// // // "НЕ ЗНАЄТЕ? 12"

// // // const month = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК"));
// // // if (month === 12) {
// // //   console.log("ВІРНО");
// // // } else {
// // //   console.log("НЕ ЗНАЄТЕ? 12");
// // // }

// // // ЗАДАЧА 5
// // // НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ВИЗНАЧАТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО , ЧИ НЕ ПАРНЕ.

// // // const number = Number(prompt("Введіть число"));

// // // if (number % 2 === 0) {
// // //   console.log("Число парне");
// // // } else {
// // //   console.log("Число не парне");
// // // }

// // // const firstNumber = number % 2 === 0 ? "Число парне" : "Число не парне";
// // // console.log(firstNumber);


// // // let birthMonth = Number(prompt("Введіть ваш місяць народження"));

// // // if (birthMonth === 12 || birthMonth === 1 || birthMonth === 2) {
// // //   console.log("Ти народився зимою");
// // // } else if (birthMonth >= 3 && birthMonth <= 5) {
// // //   console.log("Ти народився весною");
// // // } else if (birthMonth >= 6 && birthMonth <= 8) {
// // //   console.log("Ти народився літом");
// // // } else if (birthMonth >= 9 && birthMonth <= 11) {
// // //   console.log("Ти народився осінню");
// // // } else {
// // //   console.log("Введіть вірний місяць вашого народження");
// // // // }
// // // ЗАДАЧА 7
// // // НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// // // ЯКЩО ДЕНЬ - ціна 1.99
// // // ЯУЩО НЕДІЛЯ - ціна 5.99
// // // ЯКЩО МІСЯЦЬ - ціна 10.99
// // // ЯКЩО РІК - ціна 100.99

// // const periodSubscription = prompt('Який у вас період підписки: день, тиждень, місяць чи рік?').toLowerCase();
// // switch (periodSubscription) {
// //   case "день":
// //     console.log("1.99");
// //     break;
// //   case "тиждень":
// //     console.log("5.99");
// //     break;
// //   case "місяць":
// //     console.log("10.99");
// //     break;
// //   case "рік":
// //     console.log("100.99");
// //     break;
// //   default:
// //     console.log("Error");
// // }


// // function normalizeInput(input, to) {
// //   if (to === "upper") {
// //     return input.toUpperCase();
// //   }
// //   else if(to === "lower") {
// //     return input.toLowerCase();
// //   }
// // }
// // console.log(normalizeInput("This ISN'T SpaM", "lower"));
// // console.log(normalizeInput("This ISN'T SpaM", "upper"));
// // function checkForName(fullName, firstName) {
// //   if (fullName.toLowerCase().includes(firstName.toLowerCase())) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }
// // console.log(checkForName("Jason Neis", "Jason"));
// // console.log(checkForName("Jason Neis", "JAsOn"));
// // console.log(checkForName("Jason Neis", "Jakson"));

// // function checkFileExtension(fileName, ext) {
// //   if (fileName.endsWith(ext)) {
// //     return "File extension matches";
// //   } else {
// //     return "File extension does not match";
// //   }
// // }
// // console.log(checkFileExtension("styles.css", ".css"));
// // console.log(checkFileExtension("styles.css", ".js"));

// // function getFileName(file) {
// //   const indexStr = file.indexOf(".");
// //   if (indexStr !== -1) {
// //     return file.slice(0, indexStr);
// //   } else {
// //     return file;
// //   }
// // }
// // console.log(getFileName("styles.css"));
// // console.log(getFileName("index"));

// function createFileName(name, ext) {
//   const nameTrim = name.trim();
//   return `${nameTrim}.${ext}`;
// }
// console.log(createFileName(" order ", "txt"));
// console.log(createFileName("report ", "csv"));

// let clientCounter = 1;
// const maxClients = 50;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 2;
// }

// function calculateTotal(number) {
// //   let minNum = number >= 0;
// //   minNum += 2
// // }
// // console.log(number)

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i++){
//     total += i;
//   }
//   return total
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(7));

function calculateTotalPrice(order) {
  for(let i = 0; i < order.length; i++);
  return i;
}

