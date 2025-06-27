/**
 * @param {string} s
 * @return {boolean}
 */

// Stack
// Time and Space: O(n)
var isValid = function(s) {
    let stack = [], n = s.length

    for (let i = 0; i < n; i++) {
        let v = s[i]
        if (v === "(" || v === "[" || v === "{") {
            stack.push(v)
        } else {
            let v2 = stack.pop();
            if (v === ")" && v2 !== "(") return false;
            if (v === "]" && v2 !== "[") return false;
            if (v === "}" && v2 !== "{") return false;
        }
    }
    return stack.length === 0
};
console.log(isValid( "()[]{}")) // = true
