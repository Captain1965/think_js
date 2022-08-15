// Проверка типа корабля должна осуществляться путем сравнения прототипа.
// Для моторных кораблей доступны следующие специфичные характеристики:
// Мощность двигателя
// Материал корпуса

// Для парусных кораблей доступны следующие специфичные характеристики:
// Количество мачт
// Общая площадь парусов

// Что можно делать в верфи:
// Строить корабли - только своего типа
// Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
// Перекрашивать корабли - Можно красить любые корабли
// Обменивать старый корабль на новый - Можно обменивать только корабли того же типа

// Главное требование: Чистый код, весь дублирующийся код для кораблей и верфей должен быть вынесен в их прототипы. Задание потребует воспользоваться гуглом для решения. 

// Верфи и корабли должны создаваться с помощью функций-конструкторов.


function ShipYard(type) {
  this.type = type

  this.build = function(type, a, b) {
    return this.type === type? new Ship(this.type, a, b): 'type of ship does not correspond to the type of shipyard'
  }
  
  this.repair = function(name) { 
    return this.type === name.type? 'ship repaired': 'repair is not possible the type of shipyard does not match the type of ship' 
  }  

  this.exchange = function(name) { //console.log((name) === this.type)
    return this.type === name ? this.build(this.type, 0 , 0) : 'exchange is not possible the type of shipyard does not match the type of ship' 
  }  

  this.paint = function(ship) {
    return ship instanceof Ship? 'ship painted ': 'ship is not defined'  
  }
}

function Ship(type, a, b) {
  this.type = type
  if (this.type === 'sails') { return (this.numberMasts = a , this.areaSails = b)}
    if (this.type === 'motor') {return (this.powerEngine = a, this.hullMaterial = b)} 
}

ship2 = new Ship('motor', 1000, 'steel') // создание моторного корабля, мощность : 1000, материал: сталь
ship3 = new Ship('sails', 5, 1000)       // создание парусного корабля, мачт: 5, площадь парусов 1000 
console.log(ship2)
console.log(ship3)
shipYardSails = new ShipYard('sails')  // создание верфи для парусных судов
console.log(shipYardSails)
shipSails = shipYardSails.build('sails', 4, 1200) // создание корабля на верфи с заданными параметрами
console.log(shipYardSails.repair(shipSails)) // ремонт парусного судна
shipYardMotor = new ShipYard('motor')   // создание верфи для моторных судов
console.log(shipYardMotor)
shipMotor = shipYardMotor.build('motor', 1500, 'titan') // создание моторного судна
console.log(shipMotor)
console.log(shipYardMotor.repair(shipSails)) 
console.log(shipYardSails.repair(shipSails))
console.log(shipYardMotor.paint(shipSails))
console.log(shipYardMotor.paint(shipMotor))
console.log(shipSailsNew = shipYardSails.exchange('sails'))
console.log(shipSailsNew = shipYardMotor.exchange('sails'))
