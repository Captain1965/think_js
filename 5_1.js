<<<<<<< HEAD
=======
/*Реализовать структуру данных для игры в шахматы
Фигуры:
Все типы фигур: пешка, ладья, слон, конь, король, ферзь
У каждой фигуры есть соответствующие методы и свойства:
Получить допустимые ходы
Cодержит свойство своего цвета
Для пешек присутствует флаг говорящий о том, что пешку можно превратить в любую другую фигуру, кроме короля.
Общие методы и свойства должны быть вынесены в родительский класс единый для всех фигур.
Поле
Содержит координаты всех полей и состояние всего поля 
Содержит информацию о расположении всех фигур
Игра
Состояние игры: победа белого, победа черного, игра продолжается
Хранит информацию о:
Список фигур, которые были убиты
Чей сейчас ход
Сколько ходов прошло с начала игры
Всю историю ходов.*/

class Cage {                                           // координаты полей 
  constructor(letterCoordinates, numberCoordinates) {
  this.letterCoordinates = letterCoordinates;
  this.numberCoordinates = numberCoordinates;
  }  
}

class Pieсe extends Cage {         //фигуры + ee координаты + допустимые ходы
  constructor(type, color, letterCoordinates, numberCoordinates) {
    super(letterCoordinates,numberCoordinates)
  this.type = type;
  this.color = color;
  this.posibility = this.type === 'pawn'
  }
  get allowedMove() {
  }  
}


class Field {                           // шахматная доска 
  listPiece = {}
  set chesList(namePiece) { 
    this.listPiece.namePiece = true 
  }      
} 

class Game {
  constructor(name, countStep) {
    this.name = name;
    countStep = 0
  }
  diedPiece = {}
  historyStep = {}
  get countStep() {countStep++}
  get gameState() { winner: ''
  }                         
  get curentStep() {
  }   
}

piecePawnWhite = new Pieсe('pawn', 'white', 'a', 2)
pieceRookBlack = new Pieсe('rook', 'black', 'a', 8)

console.log(piecePawnWhite)
console.log(pieceRookBlack)
>>>>>>> lesson5
