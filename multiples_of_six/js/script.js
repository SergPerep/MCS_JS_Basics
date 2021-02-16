const main = document.querySelector(".main");

for (let i = 0; i <= 10000; i++) {
	if (i % 6 == 0){
		const displayItem = document.createElement("div");
		displayItem.className = "display-item";
		displayItem.innerHTML = i;
		main.append(displayItem);
	}
}
