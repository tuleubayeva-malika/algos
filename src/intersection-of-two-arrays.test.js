const {intersection} = require("./intersection-of-two-arrays");

describe("find intersection", () => {
    test("should return [2]", () => {
        expect(intersection([1,2,2,1], [2,2])).toEqual(expect.arrayContaining([2]));
    });

    test("should return [9, 4]", () => {
        expect(intersection([4,9,5], [9,4,9,8,4])).toEqual(expect.arrayContaining([9, 4]));
    });
})