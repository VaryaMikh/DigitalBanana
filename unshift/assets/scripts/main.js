array = [true, 12, 'Бла бла бла', null, 24558]

function addElemToArrayStart(array, newElement) {
	for (let i = array.length - 1; i >= 0; i--) {
		array[i + 1] = array[i];
	}
	array[0] = newElement;
}

console.log(array);
addElemToArrayStart(array, 'gsh');
console.log(array);