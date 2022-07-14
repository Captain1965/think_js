// Создать пустой объект и наполнить его данными:
const dataHuman = {}

// Добавить свойство name и записать в него значение ‘Alex’
dataHuman['name'] = 'Alex'
console.log(dataHuman) 

// Добавить свойство lastName и записать в него значение ‘Smith’
dataHuman.lastName = 'Smith'
console.log(dataHuman)

// Присвоить значение ‘Bob’ в свойство name
dataHuman.name = 'Bob'
console.log(dataHuman)

//Удалить оба свойства
delete dataHuman.name
delete dataHuman.lastName
console.log(dataHuman)
