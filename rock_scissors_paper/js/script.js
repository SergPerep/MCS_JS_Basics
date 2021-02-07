const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'

let message;
if (player - computer == 0) {
  message = "It's a tie!";
} else if (player - computer == -1 || player - computer == 2) {
	message = "Player wins";
} else message = "Computer wins";

console.log("Player: " + player);
console.log("Computer: " + computer);

console.log(message);