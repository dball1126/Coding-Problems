/**
 * @param {string} s
 * @return {number}
 */
// "Distinct Ways"
// Top-Down Dynamic Programming
// Time: O(n^2)
// Space: O(n)
var numDecodings = function(s) {
    if (s[0] === "0") return 0
    let n = s.length;
    let memo = [...new Array(n)]
    const getWays = (i) => {
        if (i >= n-1) return 1
        if (memo[i] !== undefined) return memo[i]

        let val = 0
        val += getWays(i+1)

        if (i+2 <= n && s[i] !== "0" && !(i+1 === n-1 && s[i+1] === "0") && +(s[i] + s[i+1]) <= 26) {
            
            val += getWays(i+2)
        }

        return memo[i] = val
    }

    return getWays(0)
};
console.log(numDecodings("101"))
