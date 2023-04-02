// https://leetcode.com/problems/length-of-last-word

var lengthOfLastWord = function(s) {
    let arr = s.trim().split(" ");
    let lastElement = arr[arr.length - 1];
    return lastElement.length;
};

module.exports = {lengthOfLastWord};
