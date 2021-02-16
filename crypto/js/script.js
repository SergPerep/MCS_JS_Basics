// Изначальный массив с данными
// по криптовалютам

let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
];

// Собираем цены валют в массив
// и получаем максимальную цену,
// которую будем использовать для задания
// ширины диаграммы в процентах

let pricesArr = [];
for (curr of crypto){
  pricesArr.push(curr.price);
}
const maxPrice = Math.max(...pricesArr);

// Собираем страницу

const cryptoCont = document.querySelector(".crypto-container");

for (curr of crypto){
  
  // Создаем элемент списка, в котором
  // будет лежать вся информация о валюте
  // и вставляем его на страницу
  const currEl = document.createElement("li");
  currEl.className = "curr";
  cryptoCont.append(currEl);

  // Создаем заголовок валюты 
  // и встявляем его в элемент списка
  const currTitle = document.createElement("div");
  currTitle.className = "curr-title";
  currTitle.innerHTML = curr.name;
  currEl.append(currTitle);

  // Создаем блок с числовым значением валюты
  // и вставляем его в элемент списка
  const currPrice = document.createElement("div");
  currPrice.className = "curr-price";
  currPrice.innerHTML = curr.price;
  currEl.append(currPrice);

  // Создаем диаграмму, сообщаем ширину
  // и Вставляем в элемент списка
  const currDiagram = document.createElement("div");
  currDiagram.className = "curr-diagram";
  currDiagram.style.width = curr.price * 100 / maxPrice + "%";
  currEl.append(currDiagram);

}