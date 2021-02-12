
// Переменные

const myBtn = document.querySelector(".btn");
const myHeader = document.querySelector("h1");

// Функция для рассчета

const haveEnough = () => {
	let message;
	const totalCash = +prompt("Сумма наличных");

	// Спрашиваем кол-во часов и сережек

	const watchesCount = +prompt("Кол-во золотых часов");
	const earringsCount = +prompt("Кол-во сережек с бриллиантами");

	// Спрашиваем стоимость часов и сережек

	const watchesSum = +prompt("Стоимость одних золотых часов") * watchesCount;
	const earringsSum = +prompt("Стоимость одной пары сережек с бриллиантами") * earringsCount;

	// Сравниваем суммы

	if(watchesSum + earringsSum <= totalCash){
		message = "Enough $$$";
	} else{
		message = "Not enough $$$!";
	}

	// Выводим сообщение

	myHeader.innerHTML = String(message);
	myBtn.innerHTML = "Calculate again";
};

// Нажатие на кнопку запускает функцию рассчета

myBtn.addEventListener("click", haveEnough);
