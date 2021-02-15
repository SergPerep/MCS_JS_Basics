let mathMess = (x) => {
	const expMin = 1;
	const expMax = 9;
	const exp = Math.floor(Math.random() * (expMax - expMin + 1) + expMin);
	return Math.abs(Math.pow(x, exp));
};


/* Проверка */

let test = [1, 0, -4, -2.5, -7, 8, -0.24];
test.forEach(n => console.log("Test "+ n + ": " + mathMess(n)));