//Array using literal
let fruits = ['Apple','Banana','Cherry','Grapes','Orange','Anjur']
//Array using constructor
let numbers= new Array(1,2,3,4,5);
//Access the array
console.log(fruits[0]); // Apple
console.log(numbers[2]); //3
//Modify the array
fruits[1] = "blueberry";
console.log(fruits);
//Common Methods
console.log("Length of an array : " + fruits.length);
console.log("Insert the element at the end : " + fruits.push("Dragonfruit"));
console.log(fruits);
console.log("Remove the element at the end : " + fruits.pop());
console.log(fruits);
console.log("Insert the element at the Begining : " + fruits.unshift("Dragonfruit"));
console.log(fruits);
console.log("Remove the element at the Begining : " + fruits.shift());
console.log(fruits);
console.log("--------- slice : Original array is retained as it is -----------------");
console.log(fruits.slice(1,3));
console.log(fruits);

console.log("--------- splice : Modify the origenal Array -----------------");
console.log(fruits.splice(1,1,"BlackBerry"));
console.log(fruits);

let vegetables = ["carrot", "beans"]
let eatables = fruits.concat(vegetables);
console.log(eatables);

//for each to print eatables
//Array.foreach(function(){});

eatables.forEach(function (item, index) {
    console.log(index + " : " + item);
     
});

let lastelements =  eatables.filter(function(item){
    return item.length > 6
});

console.log(lastelements);

let eleA = eatables.find(function(ele){
    return ele.startsWith('A')
})
console.log(eleA);

eatables.sort();
console.log(eatables);


let metrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]


]
console.log(metrix[1][1]);








