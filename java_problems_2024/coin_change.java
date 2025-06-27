package java_problems_2024;
import java.util.Arrays;
class Solution {
    public int coinChange(int[] coins, int amount) {
        int max = 10^4 +1;
        int[] dp = new int[amount+1];
        Arrays.fill(dp, max);
        dp[0] = 0;

        for (int c : coins) {
            for (int a = 1; a <= amount; a++) {
                if (a -c >= 0) {
                    dp[a] = Math.min(dp[a], dp[a -c] + 1);
                }
            }
        }
        return dp[amount] == max ? -1 : dp[amount];
    }
}
