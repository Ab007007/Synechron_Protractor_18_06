class Person {
    Person(name, age)
    {
        this.name = name;
        this.age = age;

    }

    greet= () => console.log("Hello , " + this.name);

}

let employee1 = new Person("Aravinda ", 40);
let employee2 = new Person("Harish ", 40);
let employee3 = new Person("Girish ", 40);


employee1.greet()
employee2.greet()
employee3.greet()

