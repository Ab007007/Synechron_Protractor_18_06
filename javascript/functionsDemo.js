function add(a=0,b=0) {
    console.log(arguments);
    console.log(`Sum of two numbers is ${a+b}`);
    if(arguments.length>2) {
        console.log("total number of arguments is " + arguments.length);
        let sum = a + b + arguments[2]
        console.log("sum of all numbers " + sum);
    }
    
}
function sum(...numbers) {
    let total = 0;
    console.log("total number of arguments is " + arguments.length);
    numbers.forEach(function (num)
    {
        console.log("num " + num);
        total +=num;   
    })
    return total;

}
console.log(sum(1,2,3,4,5,6));
console.log(sum(1,2,3,4,5,6,7,8));
console.log(sum(1,2,3,4));


add(22,66);
add(2,4);
add(2);
add(22,33,44)
