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
      quantity: 1,
      price: 2.99,
     }
    ]
    //execute 
    basket.addBagelToBasket(1, "Blueberry", 2.99)
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Add two bagels to basket", () => {
    //setup 
    const expected = [{
      id: 1,
      type: "Chocolate Chip",
      quantity: 1,
      price: 2.99,
     },
     {
      id: 2,
      type: "Cinnamon",
      quantity: 1,
      price: 2.99,
     }
    ]
    //execute 
    basket.addBagelToBasket(1, "Chocolate Chip", 2.99)
    basket.addBagelToBasket(1, "Cinnamon", 2.99)
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Remove one bagel from basket", () => {
    //setup 
    const expected = [{
      id: 1,
      type: "remaining bagel",
      quantity: 1,
      price: 2.99,
     }
    ]
    basket.addBagelToBasket(1, "remaining bagel", 2.99)
    basket.addBagelToBasket(1, "Bagel to Remove", 2.99)
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
      quantity: 1,
      price: 2.99,
     }
    ]
    basket.addBagelToBasket(1, "remaining bagel", 2.99)
    basket.addBagelToBasket(1, "Bagel to Remove 1", 2.99)
    basket.addBagelToBasket(1, "Bagel to Remove 2", 2.99)
    basket.addBagelToBasket(1, "Bagel to Remove 3", 2.99)
    //execute 
    basket.removeBagelFromBasket("Bagel to Remove 1")
    basket.removeBagelFromBasket("Bagel to Remove 2")
    basket.removeBagelFromBasket("Bagel to Remove 3")
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
  });
});