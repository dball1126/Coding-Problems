/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
// Four points
// Time O(n + m)
// Space: O(1)
var canChange = function(start, target) {
    let i = 0, j = 0, stack = []
    while (i < start.length && j < target.length) {
        if (start[i] === "_") {
            if (stack[stack.length-1] !== "R") stack.push(start[i])
        } else if (start[i] === "L") {
            while (stack[stack.length-1] === '_') stack.pop()
        } else {
            stack.push(start[i])
        }

        while (target[j] === "_") j++

        if (stack.length) {
            let idx = 0
            while (idx < stack.length) {
                if (stack[idx] !== target[j]) return false;
                idx++; j++;
            }
            stack = []
        }
        i++
    }
    return true;
};
console.log(canChange( "_L__R__R_", target = "L______RR"))