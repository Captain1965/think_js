// Реализовать функцию для фильтрации массива по длине слов, 
// значения длины указываются включительно, фильтр должен работать так:   
// const fruits = ['lime', 'orange', 'apple', 'banana', '']
// filterByLength(fruits, 0, 5) // ['lime', 'apple', '']

const fruits = ['lime', 'orange', 'apple', 'banana', ''];
var arrayBack = [];
function filterByLength(dataArray, minLength, maxLength) {
  dataArray.forEach (element => { 
    if (element.length <= maxLength && element.length >= minLength)
      arrayBack.push(element) 
     } )
  return arrayBack
}
filterByLength(fruits, 0, 5) // ['lime', 'apple', '']
console.log(arrayBack)
