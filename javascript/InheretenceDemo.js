class Animal {
    constructor(name){
        this.name = name
    }
}

class Dog extends Animal
{
    constructor(name, breed) 
    {
        super(name);
        this.breed = breed;
    }

    sounditmakes() {
        console.log(this.name + " always barks..");
    }
}


let dog = new Dog("Lilly", "Lab" );
dog.sounditmakes();