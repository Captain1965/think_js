// Реализовать функцию для перемешивания элементов массива
const random = function(a,b) {
  return Math.random()-0.5
}
// array.sort(sortRandom)
var array2 = [1,2,3,4,5,6,7,8,9,10]
function sortRandom(array) {return array.sort(random)}

console.log(sortRandom(array2))
console.log(sortRandom([1,2,3,4]))
