
// Backtracking
// Time: O(2^(n*2))
// Space: O(n*2)
var generateParenthesis = function(n) {
    const result = [], N = n*2
    const backtrack = (inn, out, curr) => {
        if (N === curr.length && inn === out) {
            return result.push(curr)
        }
        if (inn+out > N) return;
        if (inn < n) {
            backtrack(inn+1, out, curr + "(")
        }
        if (out < n && inn > out) {
            backtrack(inn, out+1, curr + ")")
        }
    }
    backtrack(0,0,"")
    return result;
};

console.log(generateParenthesis(3))