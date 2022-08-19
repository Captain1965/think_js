// С помощью прототипа реализовать структуру "Квадрат" которая будет наследоваться от структуры "Прямоугольник", 
// должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр

function Quadrilateral(side1, side2 = 0) {
  this.side1 = side1
  side2 === 0 ? this.side2 = side1 : this.side2 = side2 
}
Quadrilateral.prototype.perimetr = function() {return (this.side1 + this.side2) * 2} 
Quadrilateral.prototype.area = function() {return (this.side1 * this.side2)} 


rectangle = new Quadrilateral(5, 10)
console.log(rectangle.perimetr())
console.log(rectangle.area())

square = new Quadrilateral(15)
console.log(square.perimetr())
console.log(square.area())
