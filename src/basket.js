const inventory = require('./inventory.js')

class Basket {
  constructor() {
    this.basket = [];
    this.basketSize = 4
  }

  addBagelToBasket(type) {
    for (let i = 0; i < inventory.length; i++){
      const bagel = inventory[i]
      if (bagel["variant"] === type && this.basket.length < this.basketSize) {
        this.basket.push(bagel)
        return
      }
    }
     return "Basket is full!";

  }
  removeBagelFromBasket(type) {
    for (let i = 0; i < this.basket.length; i++) {
      const bagelToRemove = this.basket[i];
      if (bagelToRemove["variant"] == type) {
        this.basket.splice(i, 1);
        return;
      }
    }
    return "This Bagel doesn't exist";
  }

  getTotalOfBasket() {
      let count = 0;
      for (let i = 0; i < this.basket.length; i++) {
          const bagelPrice = this.basket[i]["price"]
          count = count + bagelPrice
      }
      return count
  }

  getBagelPrice(type) {
      for (let i = 0; i < inventory.length; i++) {
          const bagel = inventory[i]
          if(bagel["variant"] === type) {
              return inventory[i]
          }
      }

  }

  getBasket() {
    return this.basket;
  }
}

module.exports = Basket;
