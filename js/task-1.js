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

// function calculateTotalPrice(order) {
//   let totalPrice = 0;
//   for(let i = 0; i < order.length; i++) {
//     totalPrice += order[i];
//   }
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))

// function getEvenNumbers(start, end) {
//   for(let i = 0; i < 10 % 2 === 0; i++)
// }

// function getEvenNumbers(start, end) {
//   for (let i = start; i <= end; i++){
//     if (i % 2 === 0);
//   }
//     return i;
// }
// console.log(getEvenNumbers(2, 5))

// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     return `${item.toLowerCase()} is available to order!`;
//   }
//   else {
//     return "Sorry! We are out of stock!";
//   }
// }
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "PluM"));
// console.log(checkStorage(["apple", "plum", "pear"], "OrAnge"));

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// console.log(Object.keys(book))
// console.log(Object.values(book))

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   for (const item of Object.values(salaries)) {
//     totalSalary += item
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for(const color of colors){
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb)
// }
// console.table(hexColors)
// console.table(rgbColors)

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
// 	if(book.author === authorToSearchFor) {
// 		console.log(book);
// 		console.log(book.title)
// 		console.log(book.rating)
// 	}
// }

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

// for (const product of products) {
// 	if (product.name === productName) {
// 		return product.price;
// 	}
// 	}
// 	return null
// 	}
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"))

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
// let values = [];
//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//       values.push(product[propName])
//     }
//   }
//   return values;
// }
// console.log(getAllPropValues("name"))

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return `Product ${productName} not found!`;
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));