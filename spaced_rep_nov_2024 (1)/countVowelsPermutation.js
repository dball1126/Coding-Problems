/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    let total = 0
    let dp = [...new Array(n * 2 + 1)].map(a => [...new Array(6)].fill(""))
        dp[0][0] = "a"
        dp[1][0] = "e"
        dp[2][0] = "i"
        dp[3][0] = "0"
        dp[4][0] = "u"


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 5; j++) {

            if (dp[i][j] === "") continue

        }
    }

};

/**
 * @param {number} n
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time & Space: O(n)...5 is constant
var countVowelPermutation = function(n) {
    const memo = new Map(), mod = (10 ** 9) + 7
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const dp = (curr, len) => {
        if (len >= n) return 1
        let k = curr + ":" + len
        if (memo.has(k)) return memo.get(k)
        let sum = 0
        for (let v of vowels) {
            if (curr === "") {
                sum += dp(v, len + 1)
            } else if (v === "a" && curr === "e") {
                sum += dp(v, len+1)
            } else if (v === "e" && (curr === "a"  || curr === "i")) {
                sum += dp(v, len+1)
            } else if (v === "i" && curr !== "i") {
                sum += dp(v, len+1)
            } else if (v === "o" && (curr === "i" || curr === "u")) {
                sum += dp(v, len+1)
            } else if ( v === "u" && curr === "a") {
                sum += dp(v, len+1)
            }
            sum %= mod
        }
        memo.set(k, sum)
        return sum
    }
    return dp("", 0)
}; console.log(countVowelPermutation(5))
// Input: n = 2
// Output: 10
// Explanation: All possible strings 
// are: "ae", "ea", "ei", "ia", "ie", "io", "iu", "oi", "ou" and "ua".