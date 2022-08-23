// С помощью прототипа реализовать структуру "Квадрат" которая будет наследоваться от структуры "Прямоугольник", 
// должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр

function Rectangle(side1, side2) {
  this.side1 = side1
  this.side2 = side2
}
function Square(side) {
  this.side1 = this.side2 = side
}

function Calculator() {}

Calculator.prototype.perimetr = function() {return (this.side1 + this.side2)*2}
Calculator.prototype.area = function() {return(this.side1 * this.side2) }

Rectangle.prototype = new Calculator
Square.prototype = new Calculator 

rectangle = new Rectangle(5, 10)
square = new Square(5) 

console.log(rectangle.perimetr())
console.log(rectangle.area())

console.log(square.perimetr())
console.log(square.area())
