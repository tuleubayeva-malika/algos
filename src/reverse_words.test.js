const {reverseWords} = require("./reverse_words");

describe("reverse string", () => {
    test("should return reverse string", () => {
        expect(reverseWords("the sky is blue")).toEqual("blue is sky the")
    });
    test("should return reverse string", () => {
        expect(reverseWords("  hello world  ")).toEqual("world hello")
    });
    test("should return reverse string", () => {
        expect(reverseWords("a good   example")).toEqual("example good a")
    });
})