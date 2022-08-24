// 3. Организовать такую цепочку прототипов, в которой свойства и методы оптимально распределены по объектам:

// Есть следующее расширение объектов: 
// Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник

// Есть следующий объект, в котором свойства лежат кучей:
// const john = {
//   name: "John",
//   lastName: "Smith",
//   position: "Senior engineer",
//   startDate: "10.10.1990",
//   endDate: "10.10.2000",
//   baseSalary: "10000",
//   salaryCurrency: "$",
//   location: "Russia",
//   department: "IT",
//   phoneNumber: "+1234567890",
//   eat: function() {},
//   sleep: function() {},
//   callFriend: function() {},
//   writeReport: function() {},
//   organizeMeeting: function () {},
//   retire: function () {},
//   startVacation: function () {}
// };

Person = {
  name: "John",
  lastName: "Smith",
  location: "Russia",
  phoneNumber: "+1234567890",
  eat: function() {},
  sleep: function() {},
  callFriend: function() {},
}

AddPropertiesEmployee = {
  position: "Senior engineer",
  startDate: "10.10.1990",
  baseSalary: "10000",
  salaryCurrency: "$",
  department: "IT",
}

Employee =  Object.assign(Object.create(Person), AddPropertiesEmployee) 

AddPropertiesCurrentEmployee = {
  writeReport: function() {},
  organizeMeeting: function () {},
  startVacation: function () {}
}

CurrentEmployee = Object.assign(Object.create(Employee), AddPropertiesCurrentEmployee)

AddFormerEmployee = {
  endDate: "10.10.2000",
  retire: function () {},
}

FormerEmployee = Object.assign(Object.create(Employee), AddFormerEmployee)

