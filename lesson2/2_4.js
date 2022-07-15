// Реализовать функцию для сортировки массива чисел по убыванию
// const numbers = [-20, -10, 0, 10, 20, 30]
// sortDesc(numbers) // [30, 20, 10, 0, -10, -20]

const numbers = [-20, -10, 0, 10, 20, 30]

const sortArray= function (a,b) { 
  return b - a
}
function sortDesc(dataArray) {return dataArray.sort(sortArray)}

console.log(sortDesc(numbers))
console.log(sortDesc([ 2 , 4 , 7 , 1 , 5]))

