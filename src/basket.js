const inventory = require('./inventory.js')

class Basket {
  constructor() {
    this.basket = [];
    this.bagelId = 1;
    this.basketSize = 4;
  }

  addBagelToBasket(type) {
    const bagel = {
      id: this.bagelId,
      type: type,
      price: 2.99,
    };
    this.bagelId++;

    if (this.basket.length < this.basketSize) {
      this.basket.push(bagel);
    } else return "Basket is full!";
  }

  removeBagelFromBasket(type) {
    for (let i = 0; i < this.basket.length; i++) {
      const bagelToRemove = this.basket[i];
      if (bagelToRemove["type"] == type) {
        this.basket.splice(i, 1);
        return;
      }
    }
    return "This Bagel doesn't exist";
  }

  getTotalOfBasket() {
      let count = 0;
      for (let i = 0; i < this.basket.length; i++) {
          const bagelPrice = this.basket[i].price
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
