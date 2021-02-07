
// Спросить сумму наличных

const totalCash = +prompt("Сумма наличных");

// Спросить кол-во часов и сережек

const watchesCount = +prompt("Кол-во золотых часов");
const earringsCount = +prompt("Кол-во сережек с бриллиантами");

// Спросить стоимость часов и сережек

const watchesSum = +prompt("Стоимость одних золотых часов") * watchesCount;
const earringsSum = +prompt("Стоимость одной пары сережек с бриллиантами") * earringsCount;

//Вывод

document.body.innerHTML = "<h1>" + String(watchesSum + earringsSum <= totalCash) + "</h1>";