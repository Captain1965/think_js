// Реализовать функцию для сравнения двух массивов, 
// сравнение должно попарно сравнивать каждый элемент 
 array1 = [1,3,5,10]
 array2 = [1,3,4,5]
console.log(compareArray(array1,array2))
console.log(compareArray ([1,2], [2,1]))

function compareArray (array1,array2) { 
  return array1.map(function (item,index) {return item == array2[index]})
    }
 