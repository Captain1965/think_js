
function MoneyBox() {
  this.coin = 0;

  this.getAmount = function() {
    return this.coin;
  };
  this.addCoin = function() {
    return ++this.coin
   };
};

const box = new MoneyBox()
console.log(box.getAmount())
box.addCoin()
console.log(box.getAmount())
box.addCoin()
box.addCoin()
console.log(box.getAmount())
