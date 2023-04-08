/**
 * DFS, stack, Time and Space O(n)
 */
var isValid = function(s) {
    const map = new Map([[")", "("], ["]", "["], ["}", "{"]])
    let stack = []
    if (!s.length) return true
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (!map.has(c)) {
            stack.push(c)
        } else {
            let val = stack.pop();
            if (map.get(c) !== val) return false
        }
    }    
    if (stack.length) return false
    return true
};