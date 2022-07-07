// Реализовать функцию для перемешивания элементов массива
const sortRandom = function(a,b) {
  return Math.random()-0.5
}
// array.sort(sortRandom)
var array = [1,2,3,4,5,6,7,8,9,10]
console.log(array.sort(sortRandom))
