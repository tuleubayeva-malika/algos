const {isValid} = require("./parentheses");

describe("find if string is valid ", () => {
    test("should return true", () => {
        expect(isValid("()")).toEqual(true)
    });
    test("should return true", () => {
        expect(isValid("()[]{}")).toEqual(true);
    });
    test("should return false", () => {
        expect(isValid("(]")).toEqual(false);
    });
})