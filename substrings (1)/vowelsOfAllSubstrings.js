// Dynamic Programming
// Base Case: 0 if out of bounds, memo[0] = 0 || 1
// State Variable: i for idx of string ... end of string
//  - stands for amount of subs between 0...i
// Recurrence Relation: 
//  dp(i) = if dp[i] ==== vowel
//             dp(i) = 1 + i + dp(i-1)
//          else
//             dp(i) = dp(i-1)

// Top Down
// Time and Space: O(n)
var countVowels = function(word) {
    if (!word) return 0;
    let vowels = new Set(['a','e','i','o','u']), count = 0
    const memo = [...new Array(word.length+1)].fill(-Infinity)
    const dp = (idx) => {
        if (idx < 0) return 0;
        if (memo[idx] !== -Infinity) return memo[idx]
        if (vowels.has(word[idx])) {
            memo[idx] = 1 + idx + dp(idx - 1)
        } else {
            memo[idx] = dp(idx - 1)
        }
        count += memo[idx]
        return memo[idx]
    }
    dp(word.length-1)
    return count;
};
// Bottm Up
// Time and Space: O(n)
var countVowels = function(word) {
    if (!word) return 0;
    let vowels = new Set(['a','e','i','o','u']), count = 0;
    const dp = [...new Array(word.length+1)].fill(-Infinity)
    dp[0] = 0
    if (vowels.has(word[0])) {dp[0] = 1; count++}
    for (let idx = 1; idx < word.length; idx++) {
        if (vowels.has(word[idx])) {
            dp[idx] = 1 + idx + dp[idx - 1]
        } else {
            dp[idx] = dp[idx - 1]
        }
        count += dp[idx]
    }
    return count;
};

// Use two variables
// Time: O(n)
// Space: O(1)
var countVowels = function(word) {
    if (!word) return 0;
    let vowels = new Set(['a','e','i','o','u']), count = 0, total = 0;
    if (vowels.has(word[0])) {count++; total++}
    for (let idx = 1; idx < word.length; idx++) {
        if (vowels.has(word[idx])) {
            count = 1 + idx + count
        }
        total += count
    }
    return total;
};
console.log(countVowels('abc')) // = 3