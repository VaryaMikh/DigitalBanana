function getSquareSum() {
	alert('Введите 2 числа и мы выведем сумму их квадратов');
	return getSquare(prompt('Введите первое число > ')) + getSquare(prompt('Введите второе число > '));
}

function getSquare(numb) {
	return numb * numb;
}

function getProcent() {
	alert('Введите 2 числа и мы скажем, скольки процентов первое число составляет от второго');
	return (prompt('Введите первое число > ') / prompt('Введите первое число > ')) * 100;
}

function checkHomeworkStatus() {
	alert('Введите 2 числа и мы скажем, скольки процентов первое число составляет от второго');
	if (getSquareSum() === 265) {
		return 'perfect';
	} else {
		return 'nope';
	}
}

function setMark(status) {
	if (status === 'perfect') {
		console.log('Ученик - молодец');
	} else if (status === 'nope') {
		console.log('Ученик - туповат');
	} else {
		console.log('Что-то пошло не так');
	}
}

console.log('Сумма квадратов чисел = ', getSquareSum());
console.log('Процентное соотношение первого числа от второго =', getProcent(), '%');
console.log('Домашка сделана на', checkHomeworkStatus());
console.log(setMark());