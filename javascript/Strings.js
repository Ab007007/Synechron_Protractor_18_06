let name1 = 'Aravinda    ';
let fullname = "Aravinda HB ";
let address = `${fullname} stay in 
Bangalore, Karnataka,
India`

console.log(`Length of the string ${address.length}`);
console.log(`CharAt index 0 ${name1.charAt(0)}`); 
console.log("Unicode " + name1.charCodeAt(0));
console.log("Unicode " + name1.charCodeAt(name1.length-1));
console.log(fullname.concat(address));

console.log(fullname.includes("Aravinda"));
console.log(fullname.indexOf("Aravinda"));
console.log(address.lastIndexOf("India"));

console.log(address.replace("India","USA"));
console.log(address);

console.log("Array after split ");
let words = address.split(" ");
words.forEach(element => {
    console.log(element);
    
});

console.log(address.toUpperCase());

console.log(address.toLowerCase());

console.log(name1.length);
console.log(name1.trim().length);