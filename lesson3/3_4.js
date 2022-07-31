//Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их   
//ticketWindow.createEvent('Concert', 500) 
// создаем концерт и указываем цену билетов
//ticketWindow.buyTicket('Concert') /* Добавляем сумму за билет в кассу, возвращаем
//случайный шестизначный ID билета, создать ID можно любым способом */
//ticketWindow.returnTicket('123456') /* Возвращаем билет, если в системе такой id записан
//как проданный, он должен быть удален из списка проданных и из кассы должна быть
//вычтена соответствующая его цене сумма *

ticketWindow = {
  dataBase: {},
  
  createEvent: function(a,b) {
    this.dataBase[a] = {'prise': b, 
                   'amountKash': 0, 
                   'idTicket': []
    } 
    return this.dataBase
  },

  buyTicket: function(name) { 
    this.dataBase[name].amountKash += this.dataBase[name]['prise']
    id = Math.round(Math.random()*100000)
    this.dataBase[name].idTicket.push(id)                                                                   
    return id
  },

  returnTicket: function(number) { 
name = 'Concert'
ticketWindow.dataBaseShow()
    if (this.dataBase[name]['idTicket'].includes(number)) {
                                    this.dataBase[name].amountKash -= this.dataBase[name]['prise']
                                    return (this.dataBase[name]['idTicket'] = this.dataBase[name]['idTicket'].filter(function(f) {
                                    return f != number}))
    } 
  },

  dataBaseShow: function() {console.log(this.dataBase)}
}


ticketWindow.createEvent('Concert',500) //Реализовать систему продажи билетов, которая позволит продавать
                                        // билеты и возвращать их ticketWindow.createEvent('Concert', 500) 
ticketWindow.dataBaseShow() // показ базы с названием мероприятия суммы денег за реализованные билеты и id билетов
console.log(ticketWindow.buyTicket('Concert'))// id проданного билета
ticketWindow.buyTicket('Concert')
numberTicket = ticketWindow.buyTicket('Concert')
ticketWindow.dataBaseShow()//показ базы билетов
ticketWindow.returnTicket(numberTicket)// возврат билета с id номером
ticketWindow.dataBaseShow()// показ базы билетов
