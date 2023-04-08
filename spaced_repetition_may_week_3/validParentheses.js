/**
 * Stack
 * // Time and Space O(n)
 */
 const isValid = (s) => {
    let map = new Map();
    map.set("}", "{")
    map.set("]", "[")
    map.set(")", "(")
    let stack = [];

    for (let index = 0; index < s.length; index++) {
        const e = s[index];
    
        if (!map.has(e)) {
            stack.push(e);
        } else {
            let ele = stack.pop();
            if (!map.get(e) || map.get(e) !== ele) {
                return false
            }
        }
    }
    if (stack.length === 0) return true;
    return false
}

console.log(isValid("(([))"))