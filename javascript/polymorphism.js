class Animal {
    speak() {
        console.log("The Animal makes noise..");
    }
}

class Dog extends Animal
{
    speak() {
        console.log("The Dog Barks..");
    }
}


class Cat extends Animal
{
    speak() {
        console.log("The Cat meows..");
    }
}


let animal = new Cat();
animal.speak();

let animals = [new Dog(), new Cat(), new Animal()];

animals.forEach(animal => {animal.speak()})

