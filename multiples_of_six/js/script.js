const main = document.querySelector(".main");

for (let i = 0; i <= 10000; i++) {
	if (i % 6 == 0){

		// Создаем HTML объект с классом и вставляем в него число
		const displayItem = document.createElement("div");
		displayItem.className = "display-item";
		displayItem.innerHTML = i;
		
		// Добавляем элемент на страницу
		main.append(displayItem);
	}
}
