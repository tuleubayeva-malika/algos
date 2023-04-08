const {twoSum} = require("./add_two_sum_numbers");

describe("find two sum", () => {
    test("should return [0,1]", () => {
        expect(twoSum([2,7,11,15], 9)).toEqual(expect.arrayContaining([0,1])); // находит не равенство, а убеждается, что в ответе в массиве есть эти данные
    });
    test("should return [1,2]", () => {
        expect(twoSum([3,2,4], 6)).toEqual(expect.arrayContaining([1,2]));
    });
    test("should return [0,1]", () => {
        expect(twoSum([3,3], 6)).toEqual(expect.arrayContaining([0,1]));
    });
})