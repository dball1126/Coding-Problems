/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let n = s.length, stack = []

    const handle = () => {
        
        while (stack[stack.length-1] !== "(") {
            let left = stack.pop(), right = 0
            if (left === "+" || left === "-") left = 0
            if (stack[stack.length-1] !== "(") {
                let opt = stack.pop()
                if (stack[stack.length-1] !== "(") {
                    let right = stack.pop();
                    if (opt === "+") {
                        stack.push(left + right)
                    } else {
                        stack.push(left - right)
                    }
                
                } else {
                   
                    if (opt === "+") {
                        stack.push(left + right)
                    } else {
                        stack.push(left - right)
                    }
                }
            } else {

            }
            
        }

    }

    for (let i = n-1; i >= 0; i--) {

        if (s[i] === " ") continue;
        if (s[i] >= "0" && s[i] <= "9") {
            stack.push(parseInt(s[i]))
        } else if (s[i] !== "(") {
            stack.push(s[i])
        } else {
            handle();
        }

    }
};