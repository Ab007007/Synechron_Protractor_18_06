let uniquevalues = new Set([1,2,2,3,3,4,5,6,7]);

console.log(uniquevalues.size);

uniquevalues.add(10);
console.log(uniquevalues.size);

console.log(uniquevalues.has(2));

uniquevalues.forEach(uniquevalue => console.log(uniquevalue));