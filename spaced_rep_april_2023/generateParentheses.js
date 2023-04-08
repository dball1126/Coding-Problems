
// Backtracking
// Time: O(2^n)
// The Time complexity is not O(2^n * n) because we're not generating all possible combinations of parentheses
// Space: O(n)
var generateParenthesis = function(n) {
    const parenthesis = []
    const backtrack = (curr, opened, closed) => {
        if (curr.length === n*2 && opened === n && closed === n) {
            return parenthesis.push(curr)
        } else if (curr.length >= n*2 || closed > opened) return;

        if (opened < n) {
            backtrack(curr + '(' , opened + 1, closed)
        } 
        
        if (closed < n && closed < opened) {
            backtrack(curr + ')', opened, closed + 1)
        }
    }
    backtrack('', 0, 0)
    return parenthesis
};
console.log(generateParenthesis(2))//=[ '(())', '()()' ]
