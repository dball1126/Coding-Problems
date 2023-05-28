
// Stack
// Time: O(n)
// Space: O(log(n))...stack will not contain operators...which should be around half the input
var evalRPN = function(tokens) {
    let stack = [], result = -Infinity, operators = new Set(['+','-','/','*'])

    if (tokens.length === 1) return tokens[0];
    
    for (let i = 0; i < tokens.length; i++) {
        let tok = tokens[i]
        if (!operators.has(tok) && i !== tokens.length-1) {
            stack.push(parseInt(tok))
        } else {
            let next = stack.pop();
            if (result === -Infinity) result = stack.pop();
            
            if (tokens[i-1] !== undefined && `${next}` === tokens[i-1]) {
                if (tok === '+') result += next;
                if (tok === '-') result -= next;
                if (tok === '*') result *= next;
                if (tok === '/') result = Math.trunc(result / next);
            } else {
                if (tok === '+') result = next + result;
                if (tok === '-') result = next - result;
                if (tok === '*') result = next * result;
                if (tok === '/') result = Math.trunc(next / result);
            }
        }

    }
    return result;
};

console.log(evalRPN(["4","-2","/","2","-3","-","-"]))