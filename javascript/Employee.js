class Employee {
    constructor(name,company){
        this.name = name;
        this.company = company;
    }

    printEmployeeInfo()
    {
        console.log(this.name + " is working for " + this.company);
    }

}

const obj1 = new Employee("aravinda", "Synechron");
const obj2 = new Employee("Lary", "IBM");
const obj3 = new Employee("boss", "Subex");


obj1.printEmployeeInfo()

module.exports = Employee

