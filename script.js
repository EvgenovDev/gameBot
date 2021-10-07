'use strict';


const isNumber = (num) => {
	return !isNaN(parseFloat(num)) && isFinite(num) && (num !== null);
};

const startGame = () => {
	alert(`Вас приветствует игра "Загадывание случайного числа от 1 до 100!"`);

	let ourNumber = 23;
	let mistake = 10;

	const repeatGame = () => {
		let num = prompt("Число ваших попыток = " + mistake + " Введите ваше число");
			if (num == ourNumber && isNumber(num)) {
				num = prompt("Поздравляю, Вы угадали!!! Хотите сыграть еще?","Нажмите ОК,чтобы сыграть еще раз или отмена чтобы закрыть игру");
					if(typeof(num) === "string") {
						startGame();
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
							if(typeof(num) === "string") {
								startGame();
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
							if(typeof(num) === "string") {
								startGame();
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