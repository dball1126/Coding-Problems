/**
 * @param {string} s
 * @return {boolean}
 */
// Stack
// Time  & Space: O(n)
var isValid = function(s) {
    let map = new Map([[")", "("], ["]", "["], ["}", "{"]])
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let v = s[i]

        if (v === "(" || v === "[" || v === "{") {
            stack.push(v)
        } else {
            let prev = stack.pop()
            if (map.get(v) !== prev) return false
        }
    }
    return !stack.length
};
console.log(isValid( "([)]")) // = false
// "()" = true
//  "()[]{}" = true
// "(]" = false



