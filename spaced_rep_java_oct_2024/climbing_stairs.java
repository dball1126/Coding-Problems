package spaced_rep_java_oct_2024;

class Solution {
    public int climbStairs(int n) {
        int[] dp = new int[n+1];
        dp[n] = 1;

        for (int i = n-1; i >= 0; i--) {
            int ways = 0;
            if (i+1 <= n) {
                ways += dp[i+1];
            }
            if (i+2 <= n) {
                ways += dp[i+2];
            }
            dp[i] = ways;
        }

        return dp[0];
    }
}