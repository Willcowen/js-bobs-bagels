const Basket = require("../src/Basket.js");

describe("Basket", () => {
  let basket

  beforeEach(() => {
    basket = new Basket();
  });
  it("checking contents of basket", () => {
    //setup 
    const expected = []
    //execute 
    basket.getBasket()
    const emptybasket = basket.getBasket()
    //verify
    expect(emptybasket).toEqual(expected);
  });
  it("Add one bagel to basket", () => {
    //setup 
    const expected = [{
      id: 1,
      type: "Blueberry",
      price: 2.99
     }
    ]
    //execute 
    basket.addBagelToBasket("Blueberry")
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Add two bagels to basket", () => {
    //setup 
    const expected = [{
      id: 1,
      type: "Chocolate Chip",
      price: 2.99
     },
     {
      id: 2,
      type: "Cinnamon",
      price: 2.99
     }
    ]
    //execute 
    basket.addBagelToBasket("Chocolate Chip", 2.99)
    basket.addBagelToBasket("Cinnamon", 2.99)
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Remove one bagel from basket", () => {
    //setup 
    const expected = [{
      id: 1,
      type: "remaining bagel",
      price: 2.99
     }
    ]
    basket.addBagelToBasket("remaining bagel")
    basket.addBagelToBasket("Bagel to Remove")
    //execute 
    basket.removeBagelFromBasket("Bagel to Remove")
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Remove multiple bagels from basket", () => {
    //setup 
    const expected = [{
      id: 1,
      type: "remaining bagel",
      price: 2.99,
     }
    ]
    basket.addBagelToBasket("remaining bagel")
    basket.addBagelToBasket("Bagel to Remove 1")
    basket.addBagelToBasket("Bagel to Remove 2")
    basket.addBagelToBasket("Bagel to Remove 3")
    //execute 
    basket.removeBagelFromBasket("Bagel to Remove 1")
    basket.removeBagelFromBasket("Bagel to Remove 2")
    basket.removeBagelFromBasket("Bagel to Remove 3")
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Add one bagel then remove it returns empty", () => {
    //setup 
    const expected = [
    ]
    //execute 
    basket.addBagelToBasket("Blueberry")
    basket.removeBagelFromBasket("Blueberry")
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Adding items to a full basket", () => {
    //setup 
    const expected = "Basket is full!"
    basket.addBagelToBasket("Bagel 1")
    basket.addBagelToBasket("Bagel 2")
    basket.addBagelToBasket("Bagel 3")
    basket.addBagelToBasket("Bagel 4")
    //execute    
    const result = basket.addBagelToBasket("This bagel won't fit in my small basket")
    //verify
    expect(result).toEqual(expected);
  });
  it("overfilling my basket results in a full basket", () => {
    //setup 
    const expected = [{
      id: 1,
      type: "Bagel 1",
      price: 2.99,
     },
     {
      id: 2,
      type: "Bagel 2",
      price: 2.99,
     },
     {
      id: 3,
      type: "Bagel 3",
      price: 2.99,
     },
     {
      id: 4,
      type: "Bagel 4",
      price: 2.99,
     }
    ]
    basket.addBagelToBasket("Bagel 1")
    basket.addBagelToBasket("Bagel 2")
    basket.addBagelToBasket("Bagel 3")
    basket.addBagelToBasket("Bagel 4")
    //execute
    basket.addBagelToBasket("Bagel 5") 
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Adding two of the same bagel to my basket", () => {
    //setup 
    const expected = [{
      id: 1,
      type: "Blueberry",
      price: 2.99,
     },
     {
      id: 2,
      type: "Blueberry",
      price: 2.99,
     },
    ]
    //execute 
    basket.addBagelToBasket("Blueberry")
    basket.addBagelToBasket("Blueberry")
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Remove a bagel from basket that doesn't exist", () => {
    //setup 
    const expected = "This Bagel doesn't exist"
    basket.addBagelToBasket("Cinnamon")
    //execute 
    const result = basket.removeBagelFromBasket("sdfsdf")
    //verify
    expect(result).toEqual(expected);
  });
  it("Manager increasing the size of basket", () => {
    //setup 
    const expected = [{
      id: 1,
      type: "Bagel 1",
      price: 2.99,
     },
     {
      id: 2,
      type: "Bagel 2",
      price: 2.99,
     },
     {
      id: 3,
      type: "Bagel 3",
      price: 2.99,
     },
     {
      id: 4,
      type: "Bagel 4",
      price: 2.99,
     },
     {
      id: 5,
      type: "Bagel 5",
      price: 2.99,
     },
     {
      id: 6,
      type: "Bagel 6",
      price: 2.99,
     }
    ]
    basket.basketSize = 6
    basket.addBagelToBasket("Bagel 1")
    basket.addBagelToBasket("Bagel 2")
    basket.addBagelToBasket("Bagel 3")
    basket.addBagelToBasket("Bagel 4")
    basket.addBagelToBasket("Bagel 5")
    basket.addBagelToBasket("Bagel 6")
    //execute 
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Getting the price of one Bagel in my basket.", () => {
    //setup 
    const expected = 2.99
    basket.addBagelToBasket("Bagel 1")
    //execute 
    const result = basket.getTotalOfBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Getting the price of multiple Bagels in my basket.", () => {
    //setup 
    const expected = 2.99 + 2.99 + 2.99 
    basket.addBagelToBasket("Bagel 1")
    basket.addBagelToBasket("Bagel 2")
    basket.addBagelToBasket("Bagel 3")
    basket.addBagelToBasket("Bagel 4")
    basket.removeBagelFromBasket("Bagel 4")
    //execute 
    const result = basket.getTotalOfBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Checking the price of a Bagel before adding it to my basket.", () => {
    //setup 
    const expected = {
      "sku": "BGLO",
      "price": "0.49",
      "name": "Bagel",
      "variant": "Onion"
    }
    //execute 
    const result = basket.getBagelPrice("Onion")
    //verify
    expect(result).toEqual(expected);
  });

});