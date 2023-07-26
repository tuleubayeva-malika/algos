// https://leetcode.com/problems/reverse-words-in-a-string/
 * @param {string} s
 * @return {string}
 * trim - ' ' 
 * split(' ')
 * filter ' '
 * reverse
 * join
 */
 var reverseWords = function(s) {
    return s.trim().split(" ").filter(function(word) {
        return !!word;
    }).reverse().join(" ");
};

module.exports = {reverseWords};