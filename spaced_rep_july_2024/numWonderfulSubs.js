/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function(word) {
    const n = word.length
    const dp = [...new Array(n)]
    let odd = new Set(), even = new Map()

    for (let i = 0; i < n; i++) {
        let v = word[i]
        if (!even.has(v)) even.set(v, 0)
        even.set(v, even.get(v) + 1)

        if (even.get(v) % 2 === 1) {
            odd.add(even)
        } else {
            odd.delete(even)
        }

        let prev = dp[i-1] || 0
        let val = 1;
        if (!odd.size) {
            val = (val)  + prev
        }
        dp[i] =  val
    }
    console.log(dp)
};
console.log(wonderfulSubstrings("aba"))