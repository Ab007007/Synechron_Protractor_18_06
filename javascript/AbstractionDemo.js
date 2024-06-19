class Shape {
    constructor(name){
        if(this.constructor == Shape)
        {
            throw new Error(" cannot instatiate abstract class shape")
        }
        this.name = name;
    }

    draw() {
        throw new Error("Abstract method draw() Please implement before using")
    }
}

class Circle extends Shape {

    constructor(radius) {
        super("Circle")
        this.radius = radius;
    }

    draw() {
        console.log("Drawing " + this .name + " with radius " + this.radius);
    }
}

let circle = new Circle(10);
circle.draw();


let shape = new Shape("Random")
shape.draw();