const fruits = ['Яблочко', 'Бананчик', 'Леписинка', 'Арбуз', 'Клубничка'];

for (let i = 0; i < fruits.length; i++) {
	if (fruits[i] !== 'Леписинка') {
		console.log('Мой любимый фрукт это ' + fruits[i]);
	}
}

const users = [
	{
		name: 'Антон',
		professions: 'Jedi'
	},
	{
		name: 'Валентина',
		professions: 'Actor'
	},
	{
		name: 'Коралл',
		professions: 'Plant'
	},
	{
		name: 'Кирилл',
		professions: 'Coder'
	},
	{
		name: 'R2D2',
		professions: 'Robotzilla'
	},
	{
		name: 'Варя',
		professions: 'Dancaing qween'
	}
]

const humanNames = ['Антон', 'Валентина', 'Кирилл', 'Варя']

for (let i = 0; i < users.length; i++) {
	if (+users[i].birthdayMonth < '9') {
		users[i].age = users[i].age + 1;
		// console.log('У этого чувака др раньше сентября, поэтому он повзрослел на год ', users[i]);
	}

	users[i].isHuman = humanNames.indexOf(users[i].name);
}

users.push({
	name: 'Аркадий',
	professions: 'Scientist'
})

users.unshift({
	name: 'Иннокентий',
	professions: 'Data Scientist'
})

function addElemToArrayEnd(array, newElement) {
	array[array.length] = newElement;
}



const mass = ['Алгебра', 364, false]

function addElemToArrayStart(array, newElement, pos) {
	for (let i = array.length - 1; i >= pos; i--) {
		array[i + 1] = array[i];
	} 
	array[pos] = newElement;
}

addElemToArrayStart(users, mass, 2);
console.log(users);