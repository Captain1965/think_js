// Реализовать функцию, которая принимает текст, 
// и возвращает массив объектов со структурой { word: 'smth', length: 4, isCapitalized: false}

function stringСonversion (word) {
 return word.replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g,"").split(' ').map(element => ([
    element, 
    element.length,
    element[0] == element[0].toUpperCase()])).map(
    item => new Object ({word: item[0], length: item[1], toUpperCase: item[2]}))

}
console.log(stringСonversion('Это просто Длинный Tекст'))
console.log(stringСonversion ('Вы конечно не поверите, но тут что-то не так')) 
