const ids = new Set();

ids.add('abc');
ids.add(1);
ids.add('text');
ids.add(1);

for (const el of ids) {
	console.log(el);
}

console.log(ids.has('abc'));

ids.delete('text');

console.log(ids);
