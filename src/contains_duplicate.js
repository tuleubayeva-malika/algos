// https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 * loop1: [1, 2, 3, 1]
 * loop2: [1, 2, 3, 1]
 * if 
 */
 var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

module.exports = {containsDuplicate};