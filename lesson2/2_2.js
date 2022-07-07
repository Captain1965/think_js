// Реализовать функцию для сравнения двух массивов, 
// сравнение должно попарно сравнивать каждый элемент 

var array1 = [], array2 = [], arrayBack = []
function compareArray (array1,array2) {
  array1.forEach(element1 => {array2.forEach(element2 => {
    element1 == element2? arrayBack.push('equal') : arrayBack.push('not equal')
  })
return arrayBack})
}
 array1 = [1,3,5,10]
 array2 = [1,3,4,5]
 compareArray(array1,array2)
 console.log(arrayBack)
