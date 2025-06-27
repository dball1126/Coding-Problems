/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let len = s.length, result = 0, stack = []
    let lastNum = 0;
    const handleStack = () => {
     
        while (stack[stack.length-1] !== "(") {
            let v1 = stack.pop(), opt2 = stack.pop(), v3 = 0, stop = false
            if (opt2 === '+' || opt2 === "-") {
                if (stack[stack.length-1] !== "(") {
                    v3 = stack.pop()
                }
            }
            if (opt2 === "(") {
                opt2 = "+"
                stop = true
            }
            let val = 0
            if (opt2 === "+") {
                val = v3 + v1
            } else if (opt2 === "-") {
                val = v3 - v1
            }
            if (stop) {
                stack.pop()
                stack.push(val)
                break
            }
        }
    }
    for (let i = 0; i < len; i++) {
        if (s[i] !== " " && !isNaN(s[i])) {
            lastNum = (10 * lastNum) + parseInt(s[i])
        }
        if (s[i] === " ") {
            continue;
        } else if (s[i] === "+" || s[i] === "-") {
            stack.push(lastNum)
            lastNum = 0
        } 
        else if (s[i] === "(") {
            stack.push(s[i])
        } else if (s[i] === ")") {
            stack.push(lastNum)
            lastNum = 0
            handleStack(stack)
        }
    }
    console.log(stack)
};
console.log(calculate("(3+1)"))