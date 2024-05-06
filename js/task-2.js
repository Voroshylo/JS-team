// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл


// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles.splice(1, 1, "Классика");
// styles.shift();
// styles.unshift("Рэп", "«Регги»");


// console.log(styles);

// ЗАДАЧА 2
// використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 виведе 3 - Ajax.

// function indexElement () {
//     let indexes = ['Mango', 'Poly', 'Ajax'];

//     for(const index of indexes) {
//         console.log(`${indexes.indexOf(index)} - ${index}`);
//     }
// }

// indexElement();

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// const numbers = [17, 2, 94, 1, 23, 37];
// let smallestNumber = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//     if (smallestNumber > numbers[i]) {
//         smallestNumber = numbers[i];
//     }
// }

// console.log(smallestNumber);

// function findSmallestNumber(numbers) {
//     let smallestNumber = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//     if (smallestNumber > numbers[i]) {
//         smallestNumber = numbers[i];
//     }
// }
//     return smallestNumber;
// }

// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// ЗАДАЧА 4
//  Провірте , чи являється рядок полідромом
// const str = "ротатор";//true
// const newString = "Hello";//false

// const str = "ротатор";
// const newString = "Hello";
// let revercedStr = newString.split("").reverse().join("");

// if (newString === revercedStr) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"), і логінувати рядок "Привіт, <імя>".У випадку , відсутнього 
// відсутнього значення, виводе аргумент "Привіт , гість"
// // 

// function greet(name = "гість"){
// return ` Привіт, ${name}`;
// }console.log(greet("Василь"));
//  console.log(greet());

//  Напишіть ф-цію capitalize , яка буде приймати рядок і буде повертати новий рядок , де кожне слово буде з великої букви
// console.log(capitalize('the quick brown fox'))// 'The Quick Brown Fox '

// function capitalize (string){
//     const arrayFromString = string.split(" ")
//     let rey = [];
//     // console.log(arrayFromString);
//     for(const word of arrayFromString){
//         let up = word[0].toUpperCase()
//         console.log(up);
//         let restString = word.slice(1);
//         console.log(restString)
//         let final = `${up}${restString}`
//         console.log(final)
//         rey.push(final)
//     }
//     return rey.join(" ");
// }
// ЗАДАЧА 9
// Напишіть функцію для роботи з колекцією навчаючих курсів courses:

// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName)- змінює імя на нове
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// // addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// // addCourse("CSS"); // 'У вас уже є такий курс'
// // removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// // removeCourse("Vue"); // 'Курс з таким іменем не найдено'
// // updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(courses);
import car from "./data/car.js";
console.log(car);