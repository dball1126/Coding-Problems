// Stack.
// Time & Space: O(n)
var isValid = function(s) {
    let stack = [], map = new Map([[")","("],["}","{"],["]","["]])
    for (let i = 0; i < s.length; i++) {
        let v = s[i]
        if ("([{".includes(v)) {
            stack.push(v)
        } else {
            if (stack.pop() !== map.get(v)) return false;
        }
    }
    return !stack.length;
};

console.log(isValid("(}"))