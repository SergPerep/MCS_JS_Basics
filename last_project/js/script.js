window.onload = () => {

	//*************************
	//**** Создание класса ****
	//*************************

	class Person{
		
		// Свойства класса Person
		constructor(name){
			this.name = name;
			this.happiness = 0;
		}

		// Методы класса Person
		hasCat(){
			return this.happiness++;
		}
		hasRest(){
			return this.happiness++;
		}
		hasMoney(){
			return this.happiness++;
		}
		isSunny(){
			// Значение tempWeather получаем через API
			return tempWeather > 15 ? this.happiness++ : this.happiness;
		}
	};

	//*************************
	//***** Работа с API ******
	//*************************

	const city = "Moscow";
	const APIKey = "fa3c86c94cc1ed9a7368b88024ce92db";
	const units = "units=metric"
	const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&" + units + "&appid=" + APIKey;

	// Создание запроса
	let xhr = new XMLHttpRequest();

	// Настройка запроса
	xhr.open("GET", url, false);

	// Отправка запроса
	xhr.send();

	// Получение строки
	let jsonWeather;
	if(xhr.status !== 200){
		console.log(xhr.status + " " + xhr.statusText);
	} else{
		jsonWeather = JSON.parse(xhr.responseText);
	}

	// Получаем температуру
	const tempWeather = jsonWeather.main.temp;
	
	//*************************
	//**** Работа с формой ****
	//*************************

	const form = document.forms[0];

	form.onsubmit = (e) => {

		// Предотвращаем события по-умолчанию
		e.preventDefault();
		const userName = form.elements.name.value;
		const cat = form.elements.cat[0].checked;
		const rest = form.elements.rest[0].checked;
		const money = form.elements.money[0].checked;

		// Создаем экземпляр
		let userPerson = new Person(userName);
		
		// Запускаем методы экземляра, 
		// в зависимости от значений формы.
		// Получаем итоговое happiness
		if(cat) {
			userPerson.hasCat();
		}
		if(rest) {
			userPerson.hasRest();
		}
		if(money) {
			userPerson.hasMoney();
		}
		userPerson.isSunny();

		// На основе happiness подбираем emoji
		let mood;
		switch (userPerson.happiness){
			case 4:
			mood = "😄";
			break;
			case 3:
			mood = "😐";
			break;
			default:
			mood = "☹️";
		}

		// Выводим результат на страницу
		const resultName = document.querySelector(".personName");
		const resultIcon = document.querySelector(".icon");
		resultName.innerHTML = userPerson.name + ": ";
		resultIcon.innerHTML = mood;
	};
};
