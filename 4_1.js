// Модифицировать прототип Array, добавив в него метод shuffle, 
// чтобы получить возможность выполнять случайную сортировку для любого массива
// Array.prototype.shufle = function() {return array.sort(function(a,b) {return (0.5 - Math.random())})}


const array = [5, 4, 3, 2, 1, 21]


Array.prototype.shufl = function() {return this.sort(function(a,b) {return (0.5 - Math.random())})}

console.log(array.shufl())
a = [1, 2, 3, 4]
console.log(a.shufl())
b = [7, 8, 9, 10]
console.log(b.shufl())
