/**
 * @param {string} s
 * @return {number}
 */
// Stack
// Time and Space: O(n)
var calculate = function(s) {
    let stack = [], operators = new Set(["+", "-"])
    const calculateStack = () => {
        while (stack.length > 1) {
            let leftNum = stack.pop(), operator, rightNum
            if (operators.has(leftNum)) {
                operator = leftNum; leftNum = 0;
            } else { operator = stack.pop() } 
            if (operator === ")" ||  operator === undefined || operator === NaN) {
                stack.push(leftNum); return;
            } rightNum = stack.pop();
            if (operator === '+') {
                stack.push(leftNum + rightNum)
            } else {
                stack.push(leftNum - rightNum)
    }   }   }
    for (let i = s.length-1; i >= 0; i--) {
        let v = s[i]
        if (v === " ")  {
            continue
        }   else if (v >= 0 && v <= 9) {
            while ((s[i-1] >= 0 && s[i-1] <= 9) && s[i-1] !== " ") {
                i--;
                v = s[i] + v
            }
            stack.push(parseInt(v))
        } else if (v === "(") {
            calculateStack()
        } else {  stack.push(v) }
    }
    calculateStack()
    return stack[0]
};console.log(calculate(" 2-1 + 2 ")) // = 3