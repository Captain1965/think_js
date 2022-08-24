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
    this.dataBase[eventName] = [priseTicket]
    this.dataBase[eventName]['idTicket'] = {}     
    return this.dataBase
  },

  buyTicket: function(name) {
     this.dataBase['amountCash'] += Number(this.dataBase[name][0])
    id = Math.round(Math.random()*1000000)
    this.dataBase[name]['idTicket'][id] = true                                                                   
    return id
  },

  returnTicket: function(number) {
     name = Object.keys(this.dataBase) 
     name.shift()
     for( let i = 0; i < name.length; ++i )
      if ((String(number)) in this.dataBase[name[i]]['idTicket']) {
         delete this.dataBase[name[i]]['idTicket'][String(number)]
         this.dataBase['amountCash'] -= Number(this.dataBase[name[i]][0])
      }      
  },

  dataBaseShow: function() {console.log(this.dataBase)}
}


ticketWindow.createEvent('Concert','500') //Реализовать систему продажи билетов, которая позволит продавать
                                          // билеты и возвращать их ticketWindow.createEvent('Concert', 500)
ticketWindow.createEvent('Concert2','1000')
//ticketWindow.dataBaseShow()
ticketWindow.buyTicket('Concert') //покупка билета
ticketWindow.buyTicket('Concert') //покупка билета                                        
ticketWindow.buyTicket('Concert') //покупка билета   
//ticketWindow.dataBaseShow() // показ базы с названием мероприятия суммы денег за реализованные билеты и id билетов
numberTicket = ticketWindow.buyTicket('Concert') // получение id проданного билета
console.log(numberTicket) // id - номер возвращаемого билета
ticketWindow.buyTicket('Concert2') //покупка билета
ticketWindow.buyTicket('Concert2') //покупка билета                                        
numberTicket2 = ticketWindow.buyTicket('Concert2') //покупка билета   
ticketWindow.dataBaseShow()//показ базы билетов
ticketWindow.returnTicket(numberTicket2)// возврат билета с id номером
ticketWindow.dataBaseShow()// показ базы билетов
