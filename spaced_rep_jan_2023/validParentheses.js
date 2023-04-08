// Time and Space: O(n)
var isValid = function(s) {
    let open = new Map([['(',')'],['{','}'],['[',']']])
    let close = new Map([[')','('],['}','{'],[']','[']])
    
    let stack = []
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (open.get(char)) {
            stack.push(char)
            continue;
        }
        let prev = stack.pop()
            if (!prev) return false;
            if (prev !== close.get(char)) return false;
    }
    if (stack.length) return false;
    return true;
};
console.log(isValid("{}()())")) // = false
