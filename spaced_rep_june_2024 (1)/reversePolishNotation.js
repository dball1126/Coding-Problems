/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []

    for (let n of tokens) {
        console.log(stack)
        if (n === "+" || n === "/" || n === "*" || n === "-") {
            let v2 = stack.pop(), v1 = stack.pop()
            if (n === "+") {
                stack.push(v1 + v2)
            } else if (n === "/") {
                let v = v1 / v2
                if (v < 0) {
                    v = Math.ceil(v)
                } else {
                    v = Math.floor(v)
                }
    
                stack.push(v)
            } else if (n === "*") {
                stack.push(v1 * v2)
            } else {
                stack.push(v1 - v2)
            }
        } else {
            stack.push(parseInt(n))
        }
    }
    return stack.length === 0 ? 0 : stack[0]
};
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
))