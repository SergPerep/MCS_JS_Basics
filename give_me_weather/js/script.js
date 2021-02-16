const APIKey = "fa3c86c94cc1ed9a7368b88024ce92db";
const form = document.forms[0];
const submitBtn = document.querySelector(".submit-btn");
const cityDisplay = document.querySelector(".result-city");
const tempDisplay = document.querySelector(".result-temp");
const windDisplay = document.querySelector(".result-wind");
const resultBlock = document.querySelector(".result");

form.onsubmit = (e) => {
	e.preventDefault();

	const city = form.elements.city.value;
	const url = "http://api.openweathermap.org/data/2.5/find?q=" + city + "&units=metric&appid=" + APIKey;
	
	// Создание запроса

	let xhr = new XMLHttpRequest();

	// Настройка запроса

	xhr.open('GET', url, false);

	// Отправка запроса на сервер

	xhr.send();

	// Получение строки с сервера

	if(xhr.status !== 200){
		console.log(xhr.status + " " + xhr.statusText);
	} else{
		var WEATHER = JSON.parse(xhr.responseText);
	}

	// Получение значений температуры и
	// скорости ветра из JSON

	const cityTemp = WEATHER.list[0].main.temp;
	const cityWind = WEATHER.list[0].wind.speed;

	// Вывод в консоль

	console.log(WEATHER);
	console.log(cityTemp);
	console.log(cityWind);

	// Добавляем на страницу

	cityDisplay.innerHTML = city;
	tempDisplay.innerHTML = Math.round(cityTemp) + " °C";
	windDisplay.innerHTML = Math.round(cityWind) + " km/h";

	// Показываем элемент, если он невидим

	if(resultBlock.classList.contains("result-hidden")){
		resultBlock.classList.remove("result-hidden");
	} 

}




