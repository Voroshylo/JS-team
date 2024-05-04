// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи createElement

// js/
// export default [
//     {
//       name: 'pajero',
//       img: "https://smart-style.com.ua/uploads/mitsubishi-pajero-2011.jpg",
//       price: 950000,
//       description: "Широкий вибір комплектацій дозволяє підібрати автомобіль під ваші потреби та стиль життя. Тип привода, потужність двигуна та кількість місць у салоні — порівняти комплектації та ціни стало ще простіше.",
//     },
// {
//       name: 'jeep',
//       img: "https://ukravto.ua/files/Text/190225_JEEP_NEW_CHEROKEE_9.jpg",
//       price: 1200000,
//       description:
//         'Як і всі моделі Jeep - володіє безпрецедентним поєднанням ходових якостей, комфортності та міського шику. 2,4-літровий бензиновий двигун в поєднанні з шестиступінчастою автоматичною коробкою передач, яка відрізняється плавністю перемикання.',

//     },
//     {
//       name: 'toyota',
//       img: "https://molbuk.ua/uploads/posts/2021-06/1623319390_toyota_camry.jpg",
//       price: 999000,
//       description:
//         'Оснащений тихим самозарядним гібридним двигуном об’ємом 2,5 літра, автомобіль забезпечує значний крутний момент на низьких оборотах і феноменальну потужність на високих, а також краще реагування на дії водія та легше прискорення.',
//     },
// {
//       name: 'range rover',
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7UDUbCd6nzB5lO33DgkvyXJD4OOoKEsCemg&usqp=CAU",
//       price: 5328000,
//       description:
//         'Редуктивний характер дизайну не містить зайвих деталей, що створює форму, яка демонструє захоплюючий дух сучасності. Це найбажаніший Range Rover серед усіх існуючих.',
//     },
//   ];

// html/
// <ul class="js-goods"></ul>

// import car from "./data/car.js";
// console.log(car);

// const container = document.querySelector(".js-goods");

// function functionContainer({name, img, price, description}) {
//     const liElement = document.createElement("li");
//     const pElement = document.createElement("p");
//     pElement.textContent = description;
//     const hElement = document.createElement("h2");
//     hElement.textContent = name;
//     const imgElement = document.createElement("img");
//     imgElement.src = img;
//     imgElement.alt = name;
//     imgElement.width = 350;
//     const priceElement = document.createElement("p");
//     priceElement.textContent = price;
//     liElement.appendChild(imgElement, hElement, pElement, priceElement);
//     return liElement;
// }

// const elements = car.map(functionContainer);
// console.log(elements);

// container.append(...elements);

// ЗАДАЧА 2
// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН

// const container = document.querySelector(".container");
// const form = document.querySelector(".form");
// const price = document.querySelector("#price");
// const amount = document.querySelector(".amount");
// const userInput = document.querySelector("#quantity");
// const finalPrice = document.querySelector(".text-right");

// function calculateTotal(event) {
//   event.preventDefault();

//   const priceValue = price.value;
//   const valueQuantity = userInput.value;
//   const totalPrice = priceValue * valueQuantity;

//   amount.textContent = valueQuantity;
//   finalPrice.textContent = totalPrice;
// }

// 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ , ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН    <button class="btn">Calculate</button>

// function inputCalculater(event) {
//   const valueQuantity = userInput.value;
//   amount.textContent = valueQuantity;
// }

// 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ

// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };

// container.style.backgroundColor = randomRgbColor();

// form.addEventListener("submit", calculateTotal);
// form.addEventListener("input", inputCalculater);
