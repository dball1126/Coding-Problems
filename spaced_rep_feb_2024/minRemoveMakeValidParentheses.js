/**
 * @param {string} s
 * @return {string}
 */

// Stack type of approach
// Time and Space: O(n)
var minRemoveToMakeValid = function(s) {
    
    let result = "", open = 0, close = 0

    for (let c of s) {
        if (c === "(") {
            open++
            result += c
        } else if (c === ")") {
            if (close+1 > open) continue
            close++
            result += c
        } else {
            result += c
        }
    }

    if (open === close) return result
    open = 0, close = 0
    let newResult = ""

    for (let i = result.length-1; i >= 0; i--) {
        let c = result[i]
        if (c === "(") {
            if (close+1 > open) continue
            close++
            newResult = c + newResult
        } else if (c === ")") {
            open++
            newResult = c + newResult
        } else {
            newResult = c + newResult
        }
    }
    return newResult
};

return console.log(minRemoveToMakeValid(s = "))(("))// = ""