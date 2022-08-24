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

function SailsShip (a,b) {
  this.numberMasts = a 
  this.areaSails = b
}

function MotorShip (a,b) {
  this.powerEngine = a
  this.hullMaterial = b
}

function MotorShipYard() {
  this.build = function(a = 0, b = 0) {
    return new MotorShip(a, b)
  }

  this.checkOfType = function(ship) { return ship instanceof MotorShip
  } 
}

function YardMethods() {
  this.repair = function(ship) {
    return this.checkOfType(ship)? 'ship repaired': 'repair is not possible the type of shipyard does not match the type of ship' 
  }  
  this.change = function(ship) {
    return this.checkOfType(ship)? new ship.constructor(0, 0) : 'exchange is not possible the type of shipyard does not match the type of ship' 
  }
  this.paint = function(ship) {
    return (ship instanceof SailsShip) || (ship instanceof MotorShip)? 'ship painted ': 'ship is not defined' 
  }  
}

MotorShipYard.prototype = new YardMethods

function SailsShipYard() {
  this.build = function(a = 0, b = 0) {
    return new MotorShip(a, b)
  }

  this.checkOfType = function(ship) { return ship instanceof SailsShip
  } 
}

SailsShipYard.prototype = new YardMethods





ship1 = new MotorShip(10, 'steel')
ship2 = new SailsShip(10, 1000)
console.log(ship2)
console.log(ship1)
motorShipYard = new MotorShipYard
ship3 = motorShipYard.build(15, 'book')
console.log(ship3)
console.log(motorShipYard)
console.log(motorShipYard.change(ship1))
console.log(motorShipYard.repair(ship1))
console.log(motorShipYard.paint(ship1))
sailsShipYard = new SailsShipYard
ship4 = motorShipYard.build(10, 1200)
console.log(ship4)
console.log(sailsShipYard)
console.log(sailsShipYard.change(ship2))
console.log(sailsShipYard.repair(ship2))
console.log(sailsShipYard.paint(ship2))
  
