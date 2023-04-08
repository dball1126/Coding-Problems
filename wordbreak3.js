/**
 * State variables: i    0.........str.length-1
 * Recurrence relation: dp[i] = substr(i, word.length + 1) === word && dp(i + word.length + 1)
 */
var wordBreak = function(str, wordDict) {

    let dp = str.split("").map(s => undefined)

    const fillDP = (i) => {
        if (i >= str.length) return true;
        if (dp[i] !== undefined) return dp[i]

        for(let word of wordDict) {
            if (str.substr(i, word.length) === word && fillDP(i + word.length)) {
                dp[i] = true;
                break;
            }
        }

        if (dp[i] === undefined) dp[i] = false;
        return dp[i]
    }

    const result = fillDP(0)
    // console.log(dp)
    return result
}

console.log(wordBreak("aebbbbs",
["a","aeb","ebbbb","s","eb"]))

// 0, 3  true

// 4, 7 true


