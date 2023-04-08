var generateParenthesis = function(n) {
    const parenthesis = []
    
    const backtrack = (curr, opened, closed) => {
        if (curr.length === n*2 && opened === closed) {
            return parenthesis.push(curr)
        }
        if (opened > n || closed > n || closed > opened || curr.length >= n*2) return;

        for (let i = 0; i < n; i++) {
            if (opened >= closed && opened < n) {
                backtrack(curr + "(", opened +1, closed)
                
            }
            
            backtrack(curr + "()", opened+1, closed+1)
            if (closed < opened) {
            backtrack(curr + ")", opened, closed + 1)
                
            }
        }
    }
    backtrack("", 0, 0)
    return parenthesis
};

console.log(generateParenthesis(3))