/**
 * @param {string} s
 * @return {number}
 */
// Stack
// Time and space: O(n)
var calculate = function(s) {
    const stack = [], n = s.length, operators = new Set(["*","+","/","-"])
    for (let i = 0; i < n; i++) { // handle multiplication and division
        let v = s[i]
        if (v === ' ') continue;
        if (v === '*' || v === '/') {
            i++;
            while (s[i] == " ") i++;
            let val = s[i]
            while (s[i+1] >= "0" && s[i+1] <= "9") {
                i++;
                val += s[i]
            }
            if (v === "*") {
                stack.push(stack.pop() * parseInt(val))
            } else {
                stack.push(Math.floor(stack.pop() / parseInt(val)))
            }
        } else if (v === "+" || v === "-") {
            stack.push(v)
        } else  {
            while (s[i+1] >= "0" && s[i+1] <= "9") {
                i++;
                v += s[i]
            }
            stack.push(parseInt(v))
        }
    }
    let newStack = []
    for (let i = 0; i < stack.length; i++) { // handle addition and substraction
        let v = stack[i]
        if (v === '+' || v === '-') {
            i++;
            if (v === "+") {
                newStack.push(newStack.pop() + stack[i])
            } else {
                newStack.push(newStack.pop() - stack[i])
            }
        } else {
            newStack.push(v)            
        }
    }
    return newStack[0]
};
console.log(calculate("1*2-3/4+5*6-7*8+9/10")) // = -24