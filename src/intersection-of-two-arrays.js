// https://leetcode.com/problems/intersection-of-two-arrays/submissions/937497136/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * найти массив, где меньше эл-в, макс кол-во эл = 
 * 
 */

 var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const result = new Set();
    // циклом for пройтись по set1
    // проверить значения из set1 в set2
    // если значение есть добавить это число в result
    // вернуть result как array
    for (const num of set1) {
        if (set2.has(num)) {
            result.add(num);
        }
    }
    return Array.from(result);
};

module.exports = {intersection}