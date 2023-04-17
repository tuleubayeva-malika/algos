const {containsDuplicate} = require("./contains_duplicate");

describe("find duplicate", () => {
    test("should return true", () => {
        expect(containsDuplicate([1,2,3,1])).toEqual(true)
    });
    test("should return false", () => {
        expect(containsDuplicate([1,2,3,4])).toEqual(false);
    });
    test("should return true", () => {
        expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toEqual(true);
    });
})