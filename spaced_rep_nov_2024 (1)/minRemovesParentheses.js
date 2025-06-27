/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let open = 0, close = 0, curr = "", n = s.length

    for (let i = 0; i < n; i++) { // remove close parentheses
        let v = s[i]
        if (v === '(') {
            curr += v; open++;
        } else if ( v === ")") {
            if (open > close) {
                curr += v; close++;
            }
        } else {
            curr += v;
        }
    }
    if (open === close) return curr;
    open = 0; close = 0;

    let result = ""
    for (let i = curr.length-1; i >= 0; i--) { // remove open parentheses
        let v = curr[i]

        if (v === ')') {
            result = v + result; close++;
        } else if (v === "(") {
            if (close > open) {
                result = v + result; open++;
            }
        } else {
            result = v + result
        }
    }
    return result;
};
console.log(minRemoveToMakeValid( "))(("))// ab(c)d