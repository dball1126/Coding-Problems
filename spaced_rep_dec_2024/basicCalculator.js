/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    
    let stack = []
    for (let i = s.length-1; i >= 0; i--) {
        if (s[i] === " ") continue;

        if (s[i] >= "0" && s[i] <= "9") {
            let v = s[i]
            while (s[i-1] >= "0" && s[i-1] <= "9") {
                console.log("one")
                v = s[i-1] + v
                i--;
            }
            stack.push(parseInt(v))
        } else if (s[i] === ")") {
            stack.push(s[i])
        } else {
            let value  = 0
            while (stack.length && stack[stack.length-1] !== ")") {
                console.log(stack)

                let v = stack.pop()
                let opt = stack.pop()
                let v2 = 0
                console.log("v + " + v + " opt " + opt  + " v2 " + v2 )
                if (stack[stack.length-1] >= "0" ** stack[stack.length-1] <= "9") {
                    v2 = stack.pop()
                }
                if (opt === "+") {
                    value = v2 + v
                } else {
                    value = v2 - v
                }
                if (stack[stack.length-1] !== ")") stack.push(value)
            }
            stack.pop();    
            stack.push(value)
        }

    }
    while (stack.length > 1) {
        let value  = 0
        let v = stack.pop()
        let opt = stack.pop()
        let v2 = 0
        if (stack[stack.length-1] >= "0" ** stack[stack.length-1] <= "9") {
            v2 = stack.pop()
        }
        if (opt === "+") {
            value = v2 + v
        } else {
            value = v2 - v
        }
        stack.push(value)
    }
    return stack[0]
};
console.log(calculate("(1+(4+5+2)-3)+(6+8)"))