import Set from "./set"

const set = new Set();

set.add('abc');
set.add('abc');
set.add('123');
set.add('zxc');
console.log(set);

console.log(set.has('123')); 
console.log(set.has('456'));
