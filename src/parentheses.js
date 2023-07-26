//https://leetcode.com/problems/valid-parentheses/description/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let openPar = ["(", "[", "{"];
    const Stack = [];
    if (s.length % 2 !== 0) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        const value = s[i];
        if (openPar.includes(value)) {
            Stack.push(value);
        } else {
            let lastOpenPar = Stack.pop();
            if ((value === ')' && lastOpenPar !== '(')
                 || (value === '}' && lastOpenPar !== '{')
                 || (value === ']' && lastOpenPar !== '[')) {
                     return false;
                 }
        }
    }
    return Stack.length === 0;

};

module.exports = {isValid};