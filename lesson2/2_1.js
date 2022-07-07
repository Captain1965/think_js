// Реализовать функцию, которая принимает текст, 
// и возвращает массив объектов со структурой { word: 'smth', length: 4, isCapitalized: false}

var arrayBack = []
function stringСonversion (vord) {
    vord.split(' ').forEach(function callback(element,index){
    arrayBack[index] = {'word': element, 'length': element.length, 'isCapitalised': element[0] == element[0].toUpperCase() }
    })
    return arrayBack
}

stringСonversion ('Это просто Длинный Tекст')
console.log(arrayBack)
