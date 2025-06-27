/**
 * @param {number} n
 * @return {string[]}
 */
// Catalan Number DP Pattern
// Top-Down Dynamic Programming
// Time: O(2^n * n^2)
// Space: O(2^n)
var generateParenthesis = function(n) {
    const memo = [...new Array(n+1)]

    const dp = (p) => {
        if (p <= 0) return [""]
        if (memo[p]) return memo[p]
        let result = []
        for (let i = 0; i < p; i++) {
            let left = dp(i), right = dp(p - i - 1) // O(2^n)

            for (let l of left) {
                for (let r of right) {
                    result.push("(" + l + ")" + r)
                }
            }
        }
        return memo[p] = result
    }
    return dp(n)
};
console.log(generateParenthesis(3))
// = [ '()()()', '()(())', '(())()', '(()())', '((()))' ]



