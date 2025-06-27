/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  
    let stack = []
    let top = () => stack[stack.length-1]
    let isNum = (v) => v >= '0' && v <= '9'
    for (let i = 0; i < s.length; i++) { // remove parentheses
        let v = s[i];
        if (s[i] === ' ') continue;
        if (isNum(s[i])) {
            while (isNum(s[i+1])) {
                i++;
                v += s[i];
            }
            stack.push(parseInt(v)); 
        } else if (v !== ')') {
            stack.push(v)
        } else {
            let itemStk = []
            while(top() !== "(") {
                itemStk.push(stack.pop())
            }
            stack.pop()

            while (itemStk.length > 1) {
                let left = itemStk.pop();
                let mid = itemStk.pop();
                let right = itemStk.pop();
                if (right === "(") {
                    if (mid === "-") {
                        if (left === 0) {
                            itemStk.push(left)
                        } else if ( left < 0  ) {
                            itemStk.push(Math.abs(left))
                        } else {
                            itemStk.push(-left)
                        }
                    } else {
                        itemStk.push(left)
                    }
                } else {

                    if (mid === "+") {
                        itemStk.push(left + right)
                    } else {
                        itemStk.push(left - right)
                    }
                }
                
            }
            stack.push(itemStk[0])
        }
    }
    stack = stack.reverse()
    while (stack.length > 1) {
        let left = stack.pop();
        let mid = stack.pop();
        let right = stack.pop();
        if (right === "(") {
            if (mid === "-") {
                if (left === 0) {
                    stack.push(left)
                } else if ( left < 0  ) {
                    stack.push(Math.abs(left))
                } else {
                    stack.push(-left)
                }
            } else {
                stack.push(left)
            }
        } else {

            if (mid === "+") {
                stack.push(left + right)
            } else {
                stack.push(left - right)
            }
        }
    }
    return stack[0]
};
console.log(calculate("1-(     -2)"))