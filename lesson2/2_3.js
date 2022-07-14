// Реализовать функцию для фильтрации массива по длине слов, 
// значения длины указываются включительно, фильтр должен работать так:   
// const fruits = ['lime', 'orange', 'apple', 'banana', '']
// filterByLength(fruits, 0, 5) // ['lime', 'apple', '']

const fruits = ['lime', 'orange', 'apple', 'banana', ''];

function filterByLength(dataArray, minLength, maxLength) 
  { return dataArray.filter(x => x.length <= maxLength && x.length > minLength)
}
console.log(filterByLength(fruits, 0, 5)) // ['lime', 'apple', '']
console.log(filterByLength(['1', '22', '333'], 0, 2)) //[ '1', '22' ]
