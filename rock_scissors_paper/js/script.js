const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'

/* Possible messages */

let finalMessage;
const tie = "It's a tie!";
const playerWins = "Player wins";
const computerWins = "Computer wins";


if (player == computer) /* Checking for a tie */ {
  message = tie;
} else if (
	/* Checking for player wins */
	player == 0 /* Player: rock */ && computer == 1 /* Сomputer: scissors */ ||
	player == 1 /* Player: scissors */ && computer == 2 /* Сomputer: paper */ ||
	player == 2 /* Player: paper */ && computer == 0 /* Сomputer: rock */
	){ 
	message = playerWins;
} else message = computerWins;

/* Output message */

console.log("Player: " + player);
console.log("Computer: " + computer);
console.log(message);