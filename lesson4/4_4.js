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

  this.repair = function(ship) {
    return ship.type === this.type? 'ship repaired': 'repair is not possible the type of shipyard does not match the type of ship' 
  }  
  this.change = function(ship) {
    return ship.type === this.type? new Ship(this.type, 0, 0): 'exchange is not possible the type of shipyard does not match the type of ship' 
  }

  this.paint = function(ship) {
    return ship instanceof Ship? 'ship painted ': 'ship is not defined'  
  }
  this.build = function(a, b) {return new Ship(this.type, a, b)
  }  
}


Ship = function(type, a, b) {
  this.type = type
    if (this.type === 'sails') {this.numberMasts = a , this.areaSails = b 
    }  
    if (this.type === 'motor') {this.powerEngine = a, this.hullMaterial = b
    }
}

Ship.prototype = new ShipYard

shipYardMotor = new ShipYard('motor')           // создание верфи для моторных судов
shipYardSails = new ShipYard('sails')           // создание верфи для парусных судов
console.log(shipYardSails)
console.log(shipYardMotor)
shipSails = shipYardSails.build(4, 1200)        // создание корабля на верфи с заданными параметрами
shipMotor = shipYardMotor.build(1000,'stell')
console.log(shipSails.type)
console.log(shipMotor)
console.log(shipYardMotor.paint(shipSails))     // покраска корабля любого типа любым типом верфи
console.log(shipYardMotor.paint(shipSails))
console.log(shipYardMotor.repair(shipSails))     // ремонт корабля только своим типом верфи
console.log(shipYardMotor.change(shipSails))     // обмен корабля только своим типом верфи
