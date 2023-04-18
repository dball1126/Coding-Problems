// Dynamic Programming
// Time and Space: O(n)
var countLetters = function(str) {
    let total = 0;
    if (!str) return total;
    let dp = [...new Array(str.length)].fill(-Infinity)
    let currIdx = str.length-1
    for (let i = str.length-1; i >= 0; i--) {
        let prev = str[i+1]

        if (prev === str[i]) {
            dp[i] = (currIdx - i + 1) + dp[i+1]
        } else {
            currIdx = i;
            dp[i] = 1;
        }
        
        if (dp[i-1] === undefined || str[i-1] !== str[i]) {
            total += dp[i]
        }
    }
    return total;
};
console.log(countLetters("aaaba")) // = 8
