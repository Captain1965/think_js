// Реализовать функцию, которая принимает текст, 
// и возвращает массив объектов со структурой { word: 'smth', length: 4, isCapitalized: false}

function stringСonversion (word) {
 return word.replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g,"").split(' ').map(element => ({
    word: element, 
    length: element.length,
    isCapitalised: element[0] == element[0].toUpperCase()}))
}

console.log(stringСonversion('Это просто Длинный Tекст'))
console.log(stringСonversion ('Вы конечно не поверите, но тут что-то не так')) 
