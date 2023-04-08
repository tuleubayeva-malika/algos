// https://leetcode.com/problems/two-sum/submissions/929984932/

var twoSum = function(nums, target) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                arr = [i, j];
                break;
            } 
        }
    }
    return arr;
 };

 module.exports = {twoSum};
