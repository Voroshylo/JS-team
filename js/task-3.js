// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек , який приймає імя і логінує в консоль рядок  "Привіт" + імя
function letMeSeeYourName(greet){
    const nameUser = prompt("Введіть своє ім'я")
    greet(nameUser);
}
    
function greet(name) {
    console.log (`Привіт ${name}`)
}
letMeSeeYourName(greet)