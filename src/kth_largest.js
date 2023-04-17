// https://leetcode.com/problems/kth-largest-element-in-an-array/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    let arr = nums.sort((a, b) => b - a);
    return arr[k - 1];

};

module.exports = {findKthLargest};