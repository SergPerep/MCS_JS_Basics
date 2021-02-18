// Создаем класс тигра
class Tiger{
	constructor(name){
		this.name = name;
	}
	feedCat(){
		console.log(this.name + ": «Purrrrrr»");
	}
}

// Создаем класс злого тигра
class angryTiger extends Tiger{
	throwDart(){
		console.log(this.name + ": «ZzZzzZzZz»");
	}
}

// Создаем тигров
let shrimpTheTiger = new Tiger("Shrimp");
let satanTheTiger = new angryTiger("Satan");

// Проверяем методы
shrimpTheTiger.feedCat();
satanTheTiger.throwDart();