// Реализовать функцию для сравнения двух массивов, 
// сравнение должно попарно сравнивать каждый элемент 
function compareArray (array1,array2) {
 array1.map(function callback(element1,index) {console.log(element1 == array2[index])
 })
}
 array1 = [1,3,5,10]
 array2 = [1,3,4,5]
compareArray(array1,array2)
compareArray ([1,2], [2,1])


