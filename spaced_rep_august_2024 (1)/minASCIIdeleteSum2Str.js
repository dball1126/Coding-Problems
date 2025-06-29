var minimumDeleteSum = function(s1, s2) {
    const m = s1.length, n = s2.length;
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    // Base cases: fill the first row and column
    for (let i = 1; i <= m; i++) {
        dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
    }
    for (let j = 1; j <= n; j++) {
        dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
    }

    // Build the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + s1.charCodeAt(i - 1),
                    dp[i][j - 1] + s2.charCodeAt(j - 1)   

                );
            }
        }
    }

    return dp[m][n];
};
console.log(minimumDeleteSum(s1 = "delete", s2 = "leet"))