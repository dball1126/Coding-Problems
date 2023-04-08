


var generateParenthesis = function(n) {
    const validate = (a) => {
        let stack = [];
        for (let i = 0; i < a.length; i++) {
            const p = a[i];
            if (p === "("){
                stack.push(p)
            } else {
                let o = stack.pop();
                if (o !== "(") return false;
            }
        }
        return stack.length === 0;
    }


    const result = [];
    let str = ""
    for (let i = 0; i < n; i++) {
        str += "()"
    }
    
    const backtrack = (i, s, visited) => {
        if (s.length === n*2) {
            if (validate(s)) result.push(s)
            return;
        }
        if (i >= str.length) return;

        for (let j = i; j < str.length; j++) {
            if (visited.has(j)) continue;
            visited.add(j)
            backtrack(j+1, s + str[j], visited)
            visited.delete(j)
        }
        return;
    }
    backtrack(0, "", new Set())
    return result;
};


console.log(generateParenthesis(2))