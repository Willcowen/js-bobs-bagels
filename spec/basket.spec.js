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
      "sku": "BGLO",
      "price": 0.49,
      "name": "Bagel",
      "variant": "Onion"
    }
    ]
    //execute 
    basket.addBagelToBasket("Onion")
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Add two bagels to basket", () => {
    //setup 
    const expected = [{
      "sku": "BGLO",
      "price": 0.49,
      "name": "Bagel",
      "variant": "Onion"
    },
    {
      "sku": "BGLP",
      "price": 0.39,
      "name": "Bagel",
      "variant": "Plain"
    },
    ]
    //execute 
    basket.addBagelToBasket("Onion")
    basket.addBagelToBasket("Plain")
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Remove one bagel from basket", () => {
    //setup 
    const expected = [{
      "sku": "BGLP",
      "price": 0.39,
      "name": "Bagel",
      "variant": "Plain"
    }
    ]
    basket.addBagelToBasket("Plain")
    basket.addBagelToBasket("Blueberry")
    //execute 
    basket.removeBagelFromBasket("Blueberry")
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Remove multiple bagels from basket", () => {
    //setup 
    const expected = [{
      "sku": "BGLB",
      "price": 0.49,
      "name": "Bagel",
      "variant": "Blueberry"
    }
    ]
    basket.addBagelToBasket("Onion")
    basket.addBagelToBasket("Plain")
    basket.addBagelToBasket("Garlic")
    basket.addBagelToBasket("Blueberry")
    //execute 
    basket.removeBagelFromBasket("Onion")
    basket.removeBagelFromBasket("Plain")
    basket.removeBagelFromBasket("Garlic")
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
  it("Adding items to a full basket returns error", () => {
    //setup 
    basket.addBagelToBasket("Blueberry")
    basket.addBagelToBasket("Garlic")
    basket.addBagelToBasket("Plain")
    basket.addBagelToBasket("Onion")
    //execute    
    const result = basket.addBagelToBasket("Asiago")
    //verify
    expect(result).toEqual("Basket is full!");
  });
  it("overfilling my basket results in a full basket", () => {
    //setup 
    const expected = [{
      "sku": "BGLS",
      "price": 0.49,
      "name": "Bagel",
      "variant": "Sesame"
    },
    {
      "sku": "BGLA",
      "price": 0.99,
      "name": "Bagel",
      "variant": "Asiago"
    },
    {
      "sku": "BGLG",
      "price": 0.99,
      "name": "Bagel",
      "variant": "Garlic",
    },
    {
      "sku": "BGLW",
      "price": 0.99,
      "name": "Bagel",
      "variant": "Whole Wheat",
    }
    ]
    basket.addBagelToBasket("Sesame")
    basket.addBagelToBasket("Asiago")
    basket.addBagelToBasket("Garlic")
    basket.addBagelToBasket("Whole Wheat")
    //execute
    basket.addBagelToBasket("Blueberry") // blueberry should not be added to basket.
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
    expect(basket.getBasket().length).toEqual(4)
  });
  it("Adding two of the same bagel to my basket", () => {
    //setup 
    const expected = [{
      "sku": "BGLB",
      "price": 0.49,
      "name": "Bagel",
      "variant": "Blueberry"
    },
    {
      "sku": "BGLB",
      "price": 0.49,
      "name": "Bagel",
      "variant": "Blueberry"
    }
    ]
    //execute 
    basket.addBagelToBasket("Blueberry")
    basket.addBagelToBasket("Blueberry")
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Remove a bagel that doesn't exist returns an error.", () => {
    //setup 
    basket.addBagelToBasket("Plain")
    //execute 
    const result = basket.removeBagelFromBasket("sdfsdf")
    //verify
    expect(result).toEqual("This Bagel doesn't exist");
  });
  it("Manager increasing the size of basket", () => {
    //setup 
    const expected = [{
      "sku": "BGLP",
      "price": 0.39,
      "name": "Bagel",
      "variant": "Plain"
    },
    {
      "sku": "BGLB",
      "price": 0.49,
      "name": "Bagel",
      "variant": "Blueberry"
    },
    {
      "sku": "BGLS",
      "price": 0.49,
      "name": "Bagel",
      "variant": "Sesame"
    },
    {
      "sku": "BGLA",
      "price": 0.99,
      "name": "Bagel",
      "variant": "Asiago"
    },
    {
      "sku": "BGLG",
      "price": 0.99,
      "name": "Bagel",
      "variant": "Garlic",
    },
    {
      "sku": "BGLW",
      "price": 0.99,
      "name": "Bagel",
      "variant": "Whole Wheat",
    },
    ]
    basket.basketSize = 6
    basket.addBagelToBasket("Plain")
    basket.addBagelToBasket("Blueberry")
    basket.addBagelToBasket("Sesame")
    basket.addBagelToBasket("Asiago")
    basket.addBagelToBasket("Garlic")
    basket.addBagelToBasket("Whole Wheat")
    //execute 
    const result = basket.getBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Getting the price of one Bagel in my basket.", () => {
    //setup 
    const expected = 0.99
    basket.addBagelToBasket("Asiago")
    //execute 
    const result = basket.getTotalOfBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Getting the price of multiple Bagels in my basket.", () => {
    //setup 
    const expected = 0.39 + 0.49 + 0.49  
    basket.addBagelToBasket("Plain")
    basket.addBagelToBasket("Blueberry")
    basket.addBagelToBasket("Sesame")
    basket.addBagelToBasket("Asiago")
    basket.removeBagelFromBasket("Asiago")
    //execute 
    const result = basket.getTotalOfBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Checking the price of a Bagel before adding it to my basket.", () => {
    //setup 
    const expected = {
      "sku": "BGLO",
      "price": 0.49,
      "name": "Bagel",
      "variant": "Onion"
    }
    //execute 
    const result = basket.getBagelPrice("Onion")
    //verify
    expect(result).toEqual(expected);
  });
  it("Special Offer: 6 Onion Bagels should be £2.49", () => {
    //setup 
    const expected = 2.49
    basket.basketSize = 6
    basket.addBagelToBasket("Onion")
    basket.addBagelToBasket("Onion")
    basket.addBagelToBasket("Onion")
    basket.addBagelToBasket("Onion")
    basket.addBagelToBasket("Onion")
    basket.addBagelToBasket("Onion")
    //execute 
    const result = basket.getTotalOfBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Special Offer: 6 Everything Bagels should be £2.49", () => {
    //setup 
    const expected = 2.49
    basket.basketSize = 6
    basket.addBagelToBasket("Everything")
    basket.addBagelToBasket("Everything")
    basket.addBagelToBasket("Everything")
    basket.addBagelToBasket("Everything")
    basket.addBagelToBasket("Everything")
    basket.addBagelToBasket("Everything")
    //execute 
    const result = basket.getTotalOfBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Special Offer: 12 Plain Bagels should be £3.99", () => {
    //setup 
    const expected = 3.99
    basket.basketSize = 12
    basket.addBagelToBasket("Plain")
    basket.addBagelToBasket("Plain")
    basket.addBagelToBasket("Plain")
    basket.addBagelToBasket("Plain")
    basket.addBagelToBasket("Plain")
    basket.addBagelToBasket("Plain")
    basket.addBagelToBasket("Plain")
    basket.addBagelToBasket("Plain")
    basket.addBagelToBasket("Plain")
    basket.addBagelToBasket("Plain")
    basket.addBagelToBasket("Plain")
    basket.addBagelToBasket("Plain")
    //execute 
    const result = basket.getTotalOfBasket()
    //verify
    expect(result).toEqual(expected);
  });
  it("Special Offer: 24 plain bagels (7.98) + 12 Onion Bagels (4.98) + 12 Everything Bagels (4.98)", () => {
    //setup 
    const expected = 7.98 + 4.98 + 4.98
    basket.basketSize = 48
    for (let i = 0; i < 24; i++) {
    basket.addBagelToBasket("Plain")
    }
    for (let i = 0; i < 12; i++) {
      basket.addBagelToBasket("Onion")
    }
    for (let i = 0; i < 12; i++) {
      basket.addBagelToBasket("Everything")
    }
    //execute 
    const result = basket.getTotalOfBasket()
    //verify
    expect(result).toEqual(expected);
  });
});