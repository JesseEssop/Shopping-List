describe('Shopping-List Test', function () {
    it('This test take in an item name and price and returns the total price', function () {
        var testInstance = ShopFactory();
        testInstance.shopAddItem("milk", 25);
        assert.equal(testInstance.TotalTing(), "R25");
    }); 
    it('This test take in an item name and price and returns the price', function () {
        var testInstance = ShopFactory();
        testInstance.shopAddItem("milk", 25);
        testInstance.shopAddItem("cheese", 20);
        testInstance.shopAddItem("Coca-Cola", 25);
        testInstance.shopAddItem("bread", 15);
        testInstance.shopAddItem("Doritos", 25);

        assert.equal(testInstance.TotalTing(), "R110");
    }); 
})