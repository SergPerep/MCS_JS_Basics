// Создаем класс-фабрику по 
// производству демонов
class Demon{
	constructor(name){
		this.name = name;
		this.head = "horns";
	}
	basicAction(){
		console.log(this.name + " is cursing you");
	}
}

// Создаем класс-фабрику по
// производству ангелов на основе
// класса Demon
class Angel extends Demon{
	constructor(head){
		super(head);
		this.head = "halo";
		this.wings = true;
	}
	sings(){
		console.log("Sings a holy hymn!");
	}
	basicAction(){
		console.log(this.name + " is blessing you");
	}
}

// Производим демона
let Amon = new Demon("Amon");

// Производим ангела
let Gabriel = new Angel("Gapriel");
