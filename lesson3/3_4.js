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

  createEvent: function(eventName,priseTicket) { 
    this.dataBase['amountCash'] = 0
    this.dataBase['idTicket'] = {}
    this.dataBase['event'] = {'eventName': eventName} 
    this.dataBase['event'][eventName] ={'priseTicket': Number(priseTicket)}
    
     
    return this.dataBase
  },

  buyTicket: function(name) { 
    this.dataBase['amountCash'] += this.dataBase['event'][name]['priseTicket']
    id = Math.round(Math.random()*1000000)
    this.dataBase['idTicket'][id] = true                                                                   
    return id
  },

  returnTicket: function(number) { 
    let name = Object.keys(this.dataBase['event'])[1] // получение названия мероприятия
    if (String(number) in this.dataBase['idTicket']) {
      this.dataBase['amountCash'] -= this.dataBase['event'][name]['priseTicket']
      delete this.dataBase['idTicket'][number]
    }
  },

  dataBaseShow: function() {console.log(this.dataBase)}
}


ticketWindow.createEvent('Concert','500') //Реализовать систему продажи билетов, которая позволит продавать
                                          // билеты и возвращать их ticketWindow.createEvent('Concert', 500)
ticketWindow.buyTicket('Concert') //покупка билета
ticketWindow.buyTicket('Concert') //покупка билета                                        
ticketWindow.buyTicket('Concert') //покупка билета   
ticketWindow.dataBaseShow() // показ базы с названием мероприятия суммы денег за реализованные билеты и id билетов
numberTicket = ticketWindow.buyTicket('Concert') // получение id проданного билета
ticketWindow.dataBaseShow()//показ базы билетов
console.log(numberTicket) // id - номер возвращаемого билета
ticketWindow.returnTicket(numberTicket)// возврат билета с id номером
ticketWindow.dataBaseShow()// показ базы билетов
