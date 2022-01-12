class Basket {
    constructor() {
        this.basket = [];
        this.bagelId = 1;
    }

    addBagelToBasket(quantity, type, price) {
        const bagel = {
            id: this.bagelId,
            quantity: quantity,
            type: type,
            price: price,
        }
        this.bagelId++
        this.basket.push(bagel)
    }
    
    removeBagelFromBasket(type) {
        for (let i=0; i < this.basket.length; i++) {
        const bagelToRemove = this.basket[i]
        if(bagelToRemove["type"] == type) {
        this.basket.splice(i, 1)
        }
        }
        
    }


    getBasket() {
        return this.basket
    }

}

module.exports = Basket;