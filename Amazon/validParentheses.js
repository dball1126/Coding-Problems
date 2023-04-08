/**
 * Use Stack, for open use set, for close use map
 * Time and Space: O(n)
 */
var isValid = function(s) {
    const open = new Set(['(','[','{']);
    const close = new Map([[')','('], [']','['], ['}','{']]);
    const stack = [];
    s = s.split("");

    for(let v of s) {
        if (open.has(v)) {
            stack.push(v)
        } else {
            if (!stack.length || close.get(v) !== stack.pop()) {
                return false;
            }
        }
    }

    if (stack.length) {
        return false;
    } else {
        return true;
    }
};

console.log(isValid("([])(])"))