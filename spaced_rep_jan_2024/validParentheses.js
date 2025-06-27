
// Stack
// Time: O(n)
// Space: O(1)
var isValid = function(s) {
    const stack = [], n = s.length;

    for (let i = 0; i < n; i++) {
        const v = s[i];
        if ((v === ")" && "(" !== stack.pop())) {
            return false;
        } else if (v === "]" && "[" !== stack.pop()) {
            return false;
        } else if (v === "}" && "{" !== stack.pop()) {
            return false;
        }
        if (v === "(" || v === "[" || v === "{") {
            stack.push(v)
        }
    }
    return stack.length === 0
};

console.log(isValid( s = "(){}[]")) //= true

