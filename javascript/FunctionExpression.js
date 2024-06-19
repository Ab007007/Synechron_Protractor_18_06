const sum = function(a=0,b=0) {
    console.log(arguments);
    console.log(`Sum of two numbers is ${a+b}`);
    if(arguments.length>2) {
        console.log("total number of arguments is " + arguments.length);
        let sum = a + b + arguments[2]
        console.log("sum of all numbers " + sum);
    }
    
}

console.log(sum(3,3));

const greetuser = function (name)
{
    console.log("Hello, " + name + "!!, Have a good day");   
}

console.log(greetuser("Aravinda"));
console.log(greetuser("Harish"));