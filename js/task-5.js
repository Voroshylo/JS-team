// ЗАДАЧА 1
// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем



document.addEventListener("DOMContentLoaded", themaSwich);
const checkBox = document.querySelector(".checkbox");


function themaSwich() {
    localStorage.setItem("thema", "light");
    const bodyLight = localStorage.getItem("thema");

    console.log(bodyLight);
    if (bodyLight) {
        document.body.classList.add(bodyLight);
    } 

    checkBox.addEventListener("change", function () {
        const checkOn = this.checked; // визначає чи вкл чекбокс
        localStorage.setItem("thema", checkOn ? "dark" : "light")
        document.body.classList.toggle("dark", checkOn);
        document.body.classList.toggle("light", !checkOn);
    })
    }

