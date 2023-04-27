const {maxProfit} = require("./buy_sell_stock");

describe("find max profit", () => {
    test("should return 5", () => {
        expect(maxProfit([7,1,5,3,6,4])).toEqual(5)
    });
    test("should return 0", () => {
        expect(maxProfit([7,6,4,3,1])).toEqual(0);
    });
})