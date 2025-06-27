/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let open = 0, close = 0, result = ""

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            if (open >= close) {
                open++;
                result += s[i]
            }
        } else if (s[i] === ")") {
            if (close < open) {
                close++;
                result += s[i]
            }
        } else {
            result += s[i]
        }
    }
    
    open = 0; close = 0;
    let newResult = ""
    for (let i = result.length-1; i >= 0; i--) {
        if (result[i] === ")") {
            if (close >= open) {
                newResult = result[i] + newResult
                close++
            }
        } else if (result[i] === "(") {
            if (open < close) {
                newResult = result[i]  + newResult
                open++
            }
        } else {
            newResult = result[i] + newResult
        }
    }

    return newResult;
};
console.log(minRemoveToMakeValid("))(("))