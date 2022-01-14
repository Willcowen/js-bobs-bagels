const inventory = require('./inventory.js')

class Basket {
  constructor() {
    this.basket = [];
    this.basketSize = 4;
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
      count = count - this.getDiscount()
      
      return Number(count.toFixed(2))
  }

  getDiscount() {
    let discount = 0
    const discountOnionArray = this.basket.filter(variant => variant["variant"] === "Onion")
    const everythingBagelArray = this.basket.filter(variant => variant["variant"] === "Everything")
    const plainBagelArray = this.basket.filter(variant => variant["variant"] === "Plain")
    const coffeeArray = this.basket.filter(variant => variant["variant"] === "Coffee")
    if (discountOnionArray.length >= 6 || everythingBagelArray.length >= 6) {
      discount = discount + 0.45
    }
    if (plainBagelArray.length >= 12) {
      discount = discount + 0.69
    }
    if (coffeeArray.length >= 1 && plainBagelArray.length >= 1) {
      discount = discount + 0.13
    }
    return discount
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
