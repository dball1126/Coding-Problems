/**
 * @param {string} s
 * @return {number}
 */
// Stack
// Time and Space: O(n)
var calculate = function(s) {
    let result = 0, stack = []
    let newStr = ""
    for (let c of s) {
        newStr += c !== " " ? c : ""
    }
    s = newStr;
    for (let i = 0; i < s.length; i++) {
        let v = s[i]
        if (v === " ") continue;
        if ((v >= "0" && v <= "9") || v === "+" || v === "-") {
            if (v >= "0" && v <= "9") {
                while (s[i+1] >= "0" && s[i+1] <= "9") {
                    i++;
                    v += s[i]
                }
            }
            stack.push(v)
        } else {
            i++;
            let val = s[i]; 
            while (s[i+1] >= "0" && s[i+1] <= "9") {
                i++;
                val += s[i]
            }
            let v1 = parseInt(stack.pop()), v2 = parseInt(val)
            if (v === "*") stack.push(v1 * v2)
            if (v === "/") stack.push(Math.floor(v1 / v2))
        }
    }
    stack.reverse()
    while (stack.length) {
        if (stack.length === 1) return parseInt(stack[0])
        let v1 = parseInt(stack.pop());
        let opt = stack.pop();
        let v2 = parseInt(stack.pop());

        if (opt === "+") stack.push(v1 + v2)
        if (opt === "-") stack.push(Math.floor(v1 - v2))
    }
    return result;
};

console.log(calculate("1-1+1"))//= 1
