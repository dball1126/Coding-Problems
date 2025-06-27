package spaced_rep_nov_2024;

class Solution {
    
    // Top-Down-Dynamic Programming
    // Time & Space: O(n)...(7 and 16 are constant)
    public int dieSimulator(int n, int[] rollMax) {
        int mod = (int) Math.floor(Math.pow(10, 9) + 7);
        int[][][] memo = new int[n+1][7][16];
        for (int i = 0; i < n+1; i++) {
            for (int j = 0; j < 7; j++) {
                for (int k = 0; k < 16; k++) {
                    memo[i][j][k] = mod+2;
                }
            }
        }
        return dfs(n, memo, rollMax, 0, 0, mod);
    }
    public int dfs(int n, int[][][] memo, int[] rollMax, int curr, int currL, int mod) {
        if (n <= 0) return 1; // base case
        if (memo[n][curr][currL] != mod+2) return memo[n][curr][currL];
        int ways = 0;
        for (int k = 0; k < 6; k++) {
            if (k != curr) {
                ways += dfs(n-1, memo, rollMax, k, 1, mod);
            } else if (rollMax[curr] >= (currL + 1)) { // validation
                ways += dfs(n-1, memo, rollMax, curr, currL + 1, mod);
            }
            ways %= mod;
        }
        memo[n][curr][currL] = ways;
        return ways;
    } // n = 2, rollMax = [1,1,2,2,2,3] = 34

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.dieSimulator( 3, new int[]{1,1,1,2,2,3}));
    }
}