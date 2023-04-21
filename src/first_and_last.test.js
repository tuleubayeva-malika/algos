const {searchRange} = require("./first_and_last");

describe("find first and last position", () => {
    test("should return [0,2]", () => {
        expect(searchRange([3,3,3], 3)).toEqual(expect.arrayContaining([0,2]));
    });
    test("should return 2", () => {
        expect(searchRange([3,3,3], 3).length).toEqual(2);
    });

    test("should return [0,2]", () => {
        expect(searchRange([5,7,7,8,8,10], 8)).toEqual(expect.arrayContaining([3,4]));
    });
    test("should return 2", () => {
        expect(searchRange([5,7,7,8,8,10], 8).length).toEqual(2);
    });

    test("should return [0,2]", () => {
        expect(searchRange([5,7,7,8,8,10], 6)).toEqual(expect.arrayContaining([-1,-1]));
    });
    test("should return 2", () => {
        expect(searchRange([5,7,7,8,8,10], 6).length).toEqual(2);
    });

    test("should return [-1,-1]", () => {
        expect(searchRange([], 0)).toEqual(expect.arrayContaining([-1,-1]));
    });
    test("should return 2", () => {
        expect(searchRange([5,7,7,8,8,10], 6).length).toEqual(2);
    });
    
    
})