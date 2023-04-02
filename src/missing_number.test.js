const {missingNumber} = require("./missing_number");

describe("test length last word", () => {
    test("should return 2", () => {
        expect(missingNumber([3,0,1])).toEqual(2)
    });
    test("should return 2", () => {
        expect(missingNumber([0,1])).toEqual(2)
    });
    test("should return 8", () => {
        expect(missingNumber([9,6,4,2,3,5,7,0,1])).toEqual(8)
    });
})