const resultData = new Map();

resultData.set('average', 1.23);
resultData.set('lastReslut', null);

const germany = { name: 'Germany', population: 82 };

resultData.set(germany, 0.123);

//In Maps object can be keys

for (const el of resultData) {
	console.log(el);
}

resultData.set('average', 12.88);
console.log(resultData);

console.log(resultData.get('average'));
console.log(resultData.average); //undefined

resultData.delete(germany);
console.log(resultData);
