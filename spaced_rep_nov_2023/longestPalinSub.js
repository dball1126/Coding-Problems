// Top-Down: Dynamic programming
// Time: O(n^2)
// Space: O(n)
var longestPalindrome = function(str) {
    let n = str.length, max = [0,0], longest = ""
    const dp = (i, j) => {
        if (i < 0 || j >= n) return 0

        let v = i === j ? 1 : 0
        if (str[i] === str[j]) {
            if (i !== j) v = 2
            v = v + dp(i-1, j+1)
            if (j - i >= (max[1] - max[0])) max = [i, j]
        }
        return  v
    }
    for (let i = 0; i < n; i++) {
        dp(i, i)
        dp(i, i+1)
    }
    for (let i = max[0]; i <= max[1]; i++) {
        longest += str[i]
    }
    return longest
};
console.log(longestPalindrome("dfabaee"))//= aba