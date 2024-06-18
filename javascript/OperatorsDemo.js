// Arithmetic Operators

let a = 10
let b = 5
let d = "10"

console.log("Arithmetic Operators on " + a + " and " +b);
console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a * b = " + (a * b));
console.log("a / b = " + (a / b));
console.log("a % b = " + (a % b));
console.log("a ** b = " + (a ** b));
                

console.log("2.	Assignment Operators : ");
let c = 15;

c += 15
console.log("c " +c + " = c + 15 " + c);

c -= 15
console.log("c " +c + " = c - 15 " + c);

c *= 15
console.log("c " +c + " = c * 15 " + c);

c /= 15
console.log("c " +c + " = c / 15 " + c);

c %= 15
console.log("c " +c + " = c % 15 " + c);


console.log("Comparison Operators : " + a + " and " + b );

console.log(" a == b : " + (a == b));
console.log(" a > b : " + (a > b));
console.log(" a < b : " + (a < b));
console.log(" a === b : " + (a === b));
console.log(" a != b : " + (a > b));
console.log(" a !== b : " + (a > b));
console.log(" a >= b : " + (a >= b));
console.log(" a <= b : " + (a <= b));
console.log(" a == d : " + (a == d));
console.log(" a === d : " + (a === d));

let x = true;
let y = false;

console.log("Logical Operators");
console.log("x && y " + (x && y));
console.log("x || y " + (x || y));
console.log("!x : " + !x);
console.log("!y : " + !y);


// type of operators

let fn = "Aravinda";
let address = null;

console.log(typeof fn);
console.log(typeof 50);
console.log(typeof true);
console.log(typeof address);
let ln = new String();
console.log(ln instanceof String);
