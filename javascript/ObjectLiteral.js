// object literal

let person = {
    name: "Aravinda",
    age: 40,
    greet: function () {
        console.log("Hello, " +  this.name);
    }
}

person.greet();