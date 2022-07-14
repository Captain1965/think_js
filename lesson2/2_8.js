// Создать объект human со следующими возможностями:
// При записи значения в свойство fullName имя и фамилия должны записываться в отдельные свойства firstName и lastName
// При чтении значения fullName оно должно получаться из объединения firstName и lastName
// При задании значения свойства dateOfBirth должно так же устанавливаться свойство age в зависимости от разницы года рождения и текущего года

const human = Object.create ({} , {
  fullName: {
    set: function (valye) { 
      [this.firstName, this.lastName] = valye.split(' ')
      this.lastName == undefined? this.lastName = '': this.lastName 
    },
    get () { return this.firstName + '  ' + this.lastName
      }
    },

dateOfBirth: {
   set: function (valye) {
     [this.yearOfbirth, this.monthOfbirth, this.dayOfbirth] =  valye.split(',')
     age = Date().split(' ')[3] - this.yearOfbirth
     },
    get () { return 'age'+ ' '+age
      }
    }
})

human.fullName = 'Serg'
console.log(human.fullName)

human.fullName = 'Serg Pietrov'

human.dateOfBirth = '1965,03,18'


console.log(human.fullName)
console.log(human.dateOfBirth)
