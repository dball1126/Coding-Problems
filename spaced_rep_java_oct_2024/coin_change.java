package spaced_rep_java_oct_2024;

import java.util.Arrays;

class Solution {
    // Bottom-Up Dynamic Programming.
    // Time and Space: O(n * m)...n for coins and m for amount
    // Space: O(m)...m for amount
    public int coinChange(int[] coins, int amount) {
        int dp[] = new int[amount+1];
        Arrays.fill(dp, amount+1);
        dp[0] = 0;

        for (int c : coins) {
            for (int a = 1; a <= amount; a++) {
                if (a - c >= 0) {
                    dp[a] = Math.min(dp[a], dp[a-c] + 1);
                }
            }
         }
        return dp[amount] == amount+1 ? -1 : dp[amount];
    }
    //   coins = [1,2,5], amount = 11, Result = 3
}


