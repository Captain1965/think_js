// Создайте калькулятор позволяющий добавлять в него дополнительные методы и сохранять результат, 
// по умолчанию должны присутствовать методы add, substract
// Пример: 
// const calculator = new Calc()
// calculator.operation('31 + 32') // 63
// calculator.operation('10 * 2') // 10
// calculator.addOperation('/', (a, b) => a / b)
// calculator.operation('10 / 2') // 5
// Также, он должен хранить историю всех операций и выводить ее по запросу: 
// calculator.history() /* [{operation: '+', operands: [31,32]}, {operation: '*', 
// operands: [10,2]}, {operation: '/', operands: [10,2]}] */ 
// И очищать историю
// calculator.clearHistory()
// calculator.history() // []
// console.log(eval('10 * 2'))

function Calc() {
  let history = []
  var i = -1

  this.history = function() {return history};
  
  this.clearHistory = function() {history = []}
      
  this.operation = function(str) {
      split = str.split(' '),
      a = +split[0],
      b = +split[2],
      act = split[1]
      history[++i] = {}
      history[i]['operation'] = split[1],
      history[i]['operand'] = [Number(a),Number(b)]
      return this.action[act](a, b);
   }

  this.action = {
    "-": (a, b) => a - b,
  }

  this.addOperation = function(name, func) {
    this.action[name] = func;
  }; 
}

const calculator = new Calc
console.log(calculator.operation('5 - 2'))

calculator.addOperation('*', (a, b) => a * b)
console.log(calculator.operation('5 * 2'))

calculator.addOperation('+', (a, b) => a + b)
console.log(calculator.operation('31 + 32'))

calculator.addOperation('/', (a, b) => a / b)
console.log(calculator.operation('10 / 2'))

console.log(calculator.history())
calculator.clearHistory()
console.log(calculator.history())
