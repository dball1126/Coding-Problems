// Stack
// Time: O(n)
// Space: O(log(n))
var evalRPN = function(tokens) {
    let stack = [], result = -Infinity, opts = new Set(["+", "-", "*", "/"]);
    if (tokens.length === 1) return tokens[0]
    for (let i = 0; i < tokens.length; i++) {
        let tok = tokens[i];
        if (!opts.has(tok)) {
            stack.push(parseInt(tok))
        } else {
            let val = stack.pop();
            result = stack.pop();
            if (tok === '+') {
                result += val
            } else if (tok === '*') {
                result *= val
            } else if (tok === '-') {
                result -= val
            } else if (tok === '/') {
                result = Math.trunc(result / val)
            }
            if (i !== tokens.length-1) {
                stack.push(result)
            }}}
    return result;
};
console.log(evalRPN(["2","1","+","3","*"])) // = 9