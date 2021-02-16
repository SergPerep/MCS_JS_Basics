const APIKey = "fa3c86c94cc1ed9a7368b88024ce92db";
const city = "Houten";
const url = "http://api.openweathermap.org/data/2.5/find?q=" + city + "&units=metric&appid=" + APIKey;

// Запрос

let xhr = new XMLHttpRequest();

// Настройка запроса

xhr.open('GET', url, false);

// Отправка запроса

xhr.send();

// Получение строки

if(xhr.status !== 200){
	console.log(xhr.status + " " + xhr.statusText);
} else{
	console.log(xhr.responseText);
}

