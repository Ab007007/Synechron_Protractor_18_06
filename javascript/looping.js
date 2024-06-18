let fruits = ["apple", "banana", "grapes","cherry","mango"]

for (let index = 0; index < fruits.length; index++) 
{
    console.log(fruits[index]);  
}

console.log("\n Using for-in loop ");
for (const fruit in fruits) {
    console.log("Index : " + fruit + " has a value " + fruits[fruit]);
}

console.log("\n Using for-of loop ");
for (const fruit of fruits) {
    console.log(fruit);
}

fruits.forEach(function (ele)
    {
        console.log("Element " + ele);
    }
)
