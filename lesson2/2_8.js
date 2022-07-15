// Создать объект human со следующими возможностями:
// При записи значения в свойство fullName имя и фамилия должны записываться в отдельные свойства firstName и lastName
// При чтении значения fullName оно должно получаться из объединения firstName и lastName
// При задании значения свойства dateOfBirth должно так же устанавливаться свойство age в зависимости от разницы года рождения и текущего года

const human = Object.create ({} , {
  fullName: {
    set: function (valye) { 
      [this.firstName, this.lastName] = valye.split(' ')
    },
    get () { return [this.firstName, this.lastName].filter(Boolean).join(' ')
      }
    },

dateOfBirth: {
   set: function (valye) {
     [this.dayOfbirth, this.monthOfbirth, this.yearOfbirth] =  valye.split('.')
   },
     get () { return [this.dayOfbirth, this.monthOfbirth, this.yearOfbirth].join('.')
            }
    },
age: { 
   get() { age = Date().split(' ')[3] - this.yearOfbirth
   return 'age ' + age 
      }
    }  
})

human.fullName = 'Serg'
console.log(human.fullName)

human.fullName = 'Serg Pietrov'
console.log(human.fullName)

human.dateOfBirth = '18.03.1965'
console.log(human.dateOfBirth)

console.log(human.age)
