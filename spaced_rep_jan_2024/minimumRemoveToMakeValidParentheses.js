/**
 * @param {string} s
 * @return {string}
 */
// Stack
// Time and Space: O(n)
var minRemoveToMakeValid = function(str) {
    
    let open = 0, close = 0, stack = [], result = "", n = str.length

    for (let i = 0; i < n; i++) {
        let v = str[i]
        stack.push(v)
        if (v === "(") open++
        if (v === ")") close++

        if (open === close) {
            stack.forEach(v => result += v)
            stack = []
        } else if (close > open) {
            stack.pop()
            close--
        }
    }
    let suffix = ""
    if (close > open)
    while (stack.length) {
        if (open === close) {
            stack.forEach(v => result += v)
            stack = []
        } else {
            let v = stack.pop();
            if (v === "(") {
                open--
            } else if (v === ")") {
                close--
            } else {
                suffix = v + suffix;
            }
        }
    }
    return result + suffix
};
console.log(minRemoveToMakeValid(s = "))(("))