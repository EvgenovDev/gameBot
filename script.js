'use strict';


const startGame = (num) => {

	const isNumber = () => {
		return !isNaN(parseFloat(num)) && isFinite(num) && (num !== null);
	};

	if (num == ourNumber && isNumber(num)) {
		return alert("Поздравляю, Вы угадали!!!");
	} else if (num < ourNumber && isNumber(num)) {
		num = prompt("К сожалению,вы не угадали,ваше число меньше,попробуйте еще раз и введите число");
		startGame(num);
	} else if (num > ourNumber && isNumber(num)) {
		num = prompt("К сожалению,вы не угадали,ваше число больше,попробуйте еще раз и введите число");
		startGame(num);
	} else if (num === null) {
		return alert("Игра окончена");
	} else if (!isNumber(num)) {
		num = prompt("Введите число");
		startGame(num);
	}
};

alert(`Вас приветствует игра "Загадывание случайного числа от 1 до 100!`);
let userNumber = prompt("Угадай число от 1 до 100:", "15");
let ourNumber = 23;

startGame(userNumber);