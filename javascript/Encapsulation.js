class Person {
    #name;
    #age
    constructor(name, age)
    {
        this.#name = name;
        this.#age = age;
    }

    get name() {
        return this.#name
    }

    set name(name)
    {
        this.#name = name;
    }
    get age() {
        return this.#age
    }

    set age(num) {
        if(num > 0 && num <150) {
            this.#age = num
        }
        else 
            console.log("Invalid Age");
    }


    greet= () => console.log("Hello , " + this.#name);

}


let emp = new Person("Aravinda", 40);
emp.greet();
emp.#name = "Xyz"
emp.greet();

emp.#name = "ABCD";
emp.greet();