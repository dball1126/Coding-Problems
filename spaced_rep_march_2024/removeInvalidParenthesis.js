const validParentheses = (str) => { // O(n)
    let open = 0, close = 0;
    for (let v of str) {
        if (v === ")" && open <= close) {
            return false;
        } else if (v === ")") {
            close++;
        } else if (v === "(") {
            open++;
        }
    }
    return close === open
}
// Backtracking
// Time Complexity: O(n * 2^T)...T is the number of removals...n for checking the parentheses
// Space Complexity: O(n)
var removeInvalidParentheses = function(s) {
    let open = 0, close = 0, str = "", result = new Set(), n = s.length
    for (let i = 0; i < n; i++) { // O(n)
        const v = s[i];
        if (v === ")" && open <= close) {
            continue;
        } else if (v === "(") {
            open++; str += v;
        } else if (v === ")") {
            close++; str += v;
        } else {
            str += v;}
    }
    open = 0; close = 0;
    let newStr = ""
    for (let i = str.length -1; i >= 0; i--) { // O(n)
        const v = str[i];
        if (v === "(" && close <= open) {
            continue;
        } else if (v === "(") {
            open++; newStr =  v + newStr;
        } else if (v === ")") {
            close++; newStr =  v + newStr;
        } else {
            newStr =  v + newStr;}
    }
    let diff = (s.length - newStr.length)
    const backtrack = (idx, removes, curr) => { 
        if (removes === diff) {
            let val = curr + s.slice(idx)
            if (validParentheses(val)) result.add(val)
            return
        }
        if (idx >= n) return
        for (let i = idx; i < n; i++) {
            const v = s[i]
            if (v === "(" || v === ")") {
                backtrack(i+1, removes + 1, curr)
            }
            curr += v;
        }
    }
    if (newStr.length) backtrack(0, 0, "")
    return result.size === 0 ? [""] : Array.from(result)
}; console.log(removeInvalidParentheses("()())()"))// = ["(())()","()()()"]
