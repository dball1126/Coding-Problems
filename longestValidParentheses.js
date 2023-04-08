/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let result = 0;
    let startIDX = s.indexOf("()");

    while (startIDX > -1) {
        result++;
        let endIDX = startIDX + 2;
        let newStr = "";
        for (let i = 0; i < s.length; i++) {
            if (i < startIDX || i >= endIDX) {
                newStr+=s[i]
            }
        }
        s = newStr;
        startIDX = s.indexOf("()")
    }
    return result * 2
};

console.log(longestValidParentheses("(()"))