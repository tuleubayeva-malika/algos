const {lengthOfLastWord} = require("./last_word_length");

describe("test length last word", () => {
    test("should return 5", () => {
        expect(lengthOfLastWord("Hello World")).toEqual(5)
    });
    test("should return 4", () => {
        expect(lengthOfLastWord("   fly me   to   the moon  ")).toEqual(4)
    });
    test("should return 6", () => {
        expect(lengthOfLastWord("luffy is still joyboy")).toEqual(6)
    });
})