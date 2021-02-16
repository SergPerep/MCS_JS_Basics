const form = document.forms[0];
const resultAnswer = document.querySelector(".result-answer");
const result = document.querySelector(".result")

form.onsubmit = (e) => {
	e.preventDefault();
	const angle = form.elements.angle.value;
	const answer = Math.sin(angle * Math.PI / 180).toFixed(3);
	resultAnswer.innerHTML = "Sin(" + angle + "°) is " + answer;
}

