const names = ['Mark', 'Leo', 'Jas', 'Mark'];

console.log(names[1]);
console.log(names.length);

for (const el of names) {
	console.log(el);
}

names.push('Jas');
console.log(names.length);

const jasIndex = names.findIndex((el) => el === 'Jas');
names.splice(2, 1);
console.log(names);
