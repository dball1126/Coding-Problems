// Stack
// Time: O(n)
// Space: O(log(n))
var canBeValid = function(s, locked) {
    
    let stack = [], n = Math.floor(s.length/2), open = 0, close = 0
    if (s.length & 1) return false

    for (let i = 0; i < s.length; i++) {
        let p = s[i], peek = stack[stack.length-1], next = s[i+1]

            // locked
        if (locked[i] === '1') {
            if (p === '(') {
                stack.push('(')
                open += 1
            } else {
                if (peek === undefined) return false;
                stack.pop();
                close += 1
            }
        } else {
            // unlocked
            if (next === ')' && locked[i+1] === '1') {
                stack.push('(')
            } else if (stack.length) {
                stack.pop();
            } else {
                stack.push('(')
            }
        }
    }
    return stack.length === 0
};

console.log(canBeValid( s = "))()))", locked = "010100"))