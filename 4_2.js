// С помощью прототипа реализовать структуру "Квадрат" которая будет наследоваться от структуры "Прямоугольник", 
// должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр


const Quadrilateral = function () {
  this.perimetr = function perimetr(side1, side2 = 0) {return (side2 != 0)? ((side1 + side2) * 2): side1 * 4}
  this.area = function area (side1, side2 = 0) {return (side2 !=0)? side1 * side2: side1 ** 2}
}

Rectangle = function () {
}

Rectangle.prototype = new Quadrilateral()
rectangle = new Rectangle()
Square = function() {
}

console.log(rectangle.perimetr(5, 10))
console.log(rectangle.area(5, 10))

Square.prototype = new Rectangle()
square = new Square()

console.log(square.perimetr(5))
console.log(square.area(5))
