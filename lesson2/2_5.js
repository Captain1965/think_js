const employees = [
    {
     firstName: 'Alex',
     lastName: 'Smith',
     age: 54,
     salary: 10000,
     position: 'Architect'
    },
    {
     firstName: 'Gustav',
     lastName: 'Andersen',
     age: 31,
     salary: 5000,
     position: 'Software engineer'
    },
    {
     firstName: 'Liz',
     lastName: 'Taylor',
     age: 20,
     salary: 7000,
     position: 'Manager'
    }
]
 
// 1. Узнать среднюю зарплату сотрудников

const sumSalary = function (acc,item) {
    return acc + Number(item.salary)
}
const medianSalary = employees.reduce(sumSalary,0)/(employees.length)
console.log(medianSalary)



// 2. Отсортировать сотрудников по зарплате

const sortSalary = function (a, b) {
return a.salary - b.salary
}
const valueSalaru = employees.sort(sortSalary)
console.log(valueSalaru)




// 3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет

 const show = function (item) {
    if (item.age > 25 && item.salary > 4500) {
        return item.firstName + ' '+ item.lastName
    }    
 }

const newArray = employees.map(show).filter(arr => arr)
console.log(newArray)
