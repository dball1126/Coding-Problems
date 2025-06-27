var minDistance = function(word1, word2) {
  let n = word1.length, m = word2.length
  let dp = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(Infinity))
  for (let i = n-1; i >= 0; i--) {
    for (let j = m-1; j >= 0; j--) {
        let v1 = word1[i], v2 = word2[j]
        if (dp[i][j] !== Infinity) continue;

        if (dp[i+1][j+1] === Infinity) dp[i+1][j+1] = 0
        if (dp[i+1][j] === Infinity) dp[i+1][j] = 0
        if (dp[i][j+1] === Infinity) dp[i][j+1] = 0
        
        if (v1 === v2) {
          dp[i][j] = dp[i+1][j+1]
        } else {
            dp[i][j] = 1 + Math.min(dp[i+1][j], dp[i+1][j+1]) 
        }
    }
  }
  console.log(dp)
  return dp[0][0]
};


var minDistance = function(word1, word2) {
  let n = word1.length, m = word2.length
  let memo = [...new Array(n+1)].map(a => [...new Array(m+1)].fill(Infinity))
  const dp = (i, j) => {
    if (i > n || j > m || (word1[i] === word2[j] && i === n-1 && j === m-1)) {
      if (memo[i] && memo[i][j]) return memo[i][j] = 0
      return 0
    }
    if (memo[i][j] !== Infinity) return memo[i][j]
    if (word1[i] === word2[j]) {
      return memo[i][j] = dp(i+1, j+1)
    }
    return memo[i][j] = Math.min( 1 + dp(i+1, j+1), 1 + dp(i+1, j), 1 + dp(i, j+1))
  }
   dp(0,0)
  return Math.min(memo[0][0])
};

// "spartan"
// word2 =
// "part"