/**
 * Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.
 */

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    calculateArea(){
        let rectangleArea = this.width * this.height;
        return rectangleArea;
    }

    calculatePerimeter(){
        let rectanglePerimeter = 2 * (this.width + this.height);
        return rectanglePerimeter;
    }
}

let actualRectangle = new Rectangle(10, 10);

let actualRectangleArea = actualRectangle.calculateArea();
let actualRectanglePerimeter = actualRectangle.calculatePerimeter();

console.log(`Rectangle area is ${actualRectangleArea}`);
console.log(`Rectangle perimeter is ${actualRectanglePerimeter}`);
