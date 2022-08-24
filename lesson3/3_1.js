
function MoneyBox() {
  let coin = 0;

  this.getAmount = function() {
    return coin;
  };
  this.addCoin = function() {
    return ++coin
   };
};

const box = new MoneyBox()
console.log(box.getAmount())
box.coin = 999
console.log(box.getAmount())
box.addCoin()
box.addCoin()
console.log(box.getAmount())
