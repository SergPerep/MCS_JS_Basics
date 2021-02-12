/* Такую функцию нельзя вызвать до ее декларирования*/

const myBtn = document.querySelector("button");

myBtn.addEventListener("click", () => {
	console.log(this);
});
