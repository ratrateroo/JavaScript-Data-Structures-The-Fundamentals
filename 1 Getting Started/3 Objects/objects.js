const person = {
	firstName: 'Mark',
	age: 32,
	hobies: ['Coding', 'MMORPG'],
	greet() {
		console.log('Hi, I am' + this.firstName);
	},
};

//Objects are not iterable
/* for (const el of person) {
  console.log(el);
} */

//Object elements can't be accessed by index.
/* console.log(person[0]); */

console.log(person['firstName']);
console.log(person.firstName);

person.lastName = 'Tarex';

console.log(person);
person.greet();
