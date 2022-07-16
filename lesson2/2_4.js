// Реализовать функцию для сортировки массива чисел по убыванию
// const numbers = [-20, -10, 0, 10, 20, 30]
// sortDesc(numbers) // [30, 20, 10, 0, -10, -20]

const numbers = [-20, -10, 0, 10, 20, 30]

//function sortDesc(dataArray) {return dataArray.sort((a, b) => b - a)}
const sortDesc = dataArray => dataArray.sort((a, b) => b - a)

console.log(sortDesc(numbers))
console.log(sortDesc([ 2 , 4 , 7 , 1 , 5]))

