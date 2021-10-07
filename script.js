'use strict';


const isNumber = (num) => {
	return !isNaN(parseFloat(num)) && isFinite(num) && (num !== null);
};

const startGame = () => {
	alert(`Вас приветствует игра "Загадывание случайного числа от 1 до 100!`);
	let ourNumber = 23;
	let mistake = 4;
	const repeatGame = () => {
		let num = prompt("Число ваших попыток = " + mistake + " Введите ваше число");
			if (num == ourNumber && isNumber(num)) {
				if(prompt("Поздравляю, Вы угадали!!! Хотите сыграть еще?","Нажмите ОК,чтобы сыграrepeatGameз или отмена чтобы закрыть игру") == "string") {
					mistake = 10;
					repeatGame();
				} else if (num === null) {
					return alert("Игра окончена");
				}
			} else if (num < ourNumber && isNumber(num)) {
				if(mistake > 1){
					--mistake;
					alert("Ваше число меньше");
					repeatGame();
				} else {
						num = prompt("Попытки закончились хотите сыграть еще?","Нажмите ОК,чтобы сыграть еще раз или отмена чтобы закрыть игру");
							if(num == "string") {
								mistake = 10;
								repeatGame();
							} else if (num === null) {
								return alert("Игра окончена");
							}
				}
			} else if ((num > ourNumber && isNumber(num))) {
				if(mistake > 1){
					--mistake;
					alert("Ваше число больше");
					repeatGame();
				} else {
						num = prompt("Попытки закончились хотите сыграть еще?","Нажмите ОК,чтобы сыграть еще раз или отмена чтобы закрыть игру");
							if(num == "string") {
								mistake = 10;
								repeatGame();
							} else if (num === null) {
								return alert("Игра окончена");
							}
				}
			} else if (num === null) {
				return alert("Игра окончена");
			} else if (!isNumber(num)) {
				repeatGame();
			}
		};

		repeatGame();
};

startGame();