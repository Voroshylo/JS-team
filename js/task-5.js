// ЗАДАЧА 1
// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем


//
// document.addEventListener("DOMContentLoaded", themaSwich);
// const checkBox = document.querySelector(".checkbox");


// function themaSwich() {
//     localStorage.setItem("thema", "light");
//     const bodyLight = localStorage.getItem("thema");

//     console.log(bodyLight);
//     if (bodyLight) {
//         document.body.classList.add(bodyLight);
//     } 

//     checkBox.addEventListener("change", function () {
//         const checkOn = this.checked; // визначає чи вкл чекбокс
//         localStorage.setItem("thema", checkOn ? "dark" : "light")
//         document.body.classList.toggle("dark", checkOn);
//         document.body.classList.toggle("light", !checkOn);
//     })
//     }


// СТВОРИ СПИСОК ЗАМІТОК НА ДЕНЬ:
// 1)ПОЛУЧИТИ ДОСТУП ДО ЕЛЕМЕНТІВ ФОРМИ, ПРИ НАТИСКАННЯ НА КНОПОЧКУ ADD
// 2)НА ОСНОВІ ДАНИХ ЯКІ МИ ВЗЯЛИ З ФОРМИ ВІДМАЛЮВАТИ ЕЛЕМЕНТИ СПИСКУ НА ЕКРАН ЗА ДОПОМОГОЮ КРЕЙТЕЛЕМЕНТ
// 3)ДОДАЙ ЦЕЙ СПИСОК ДО ЛОКАЛ СТОРЕДЖ

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const list = document.querySelector(".item-list");

function addStorage(param) {
    localStorage.setItem("point", JSON.stringify(param));
}

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const value = input.value;
    const itemList = document.createElement("li")
    itemList.textContent = value;
    list.appendChild(itemList);

    const listItems = JSON.parse(localStorage.getItem("point"));

    if (!listItems) {
        return [];
    }
    listItems.push(value)
    addStorage(listItems);
}

