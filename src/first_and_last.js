// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let index = nums.indexOf(target);
    if (index === -1) {
        return [-1,-1];
    } 
    let arr = [index];
    for (let i = index + 1; i < nums.length; i++) {
        if (nums[i] === target) {
            arr.push(i)
        }
    } 
    if (arr.length !== 1) {
        if (arr.length > 2) {
            return [index, arr[arr.length-1]];
        } return arr;
    }
    return [index, index];
};

module.exports = {searchRange};