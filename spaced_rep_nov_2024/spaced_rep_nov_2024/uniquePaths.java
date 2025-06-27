package spaced_rep_nov_2024;

class Solution {
    // Bottom-Up Dynamic Programming
    // Time and Space: O(n * m)
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int n = obstacleGrid.length; int m = obstacleGrid[0].length;
        int dp[][] = new int[n+2][m+2];
        dp[n-1][m-1] = 1; // base case

        for (int r = n-1; r >= 0; r--) {
            for (int c = m-1; c >= 0; c--) {
                if (r == n-1 && c == m -1) continue;
                if (obstacleGrid[r][c] == 1) continue;
                int nx1 = dp[r+1][c]; int n2 = dp[r][c+1];
                int v = 0;
                if (r+1 < n && obstacleGrid[r+1][c] != 1) {
                    v+= nx1;
                }
                if (c+1 < m && obstacleGrid[r][c+1] != 1)  {
                    v += n2;
                }
                dp[r][c] = v;
            }
        }
        return dp[0][0] == 0 ? 1 : dp[0][0];
    }
    //  [[0,0,0],
    //  [0,1,0],   = 2
    //  [0,0,0]]
    public static void main(String[] args) {
        Solution sol = new Solution();

        System.out.println(sol.uniquePathsWithObstacles(new int[][]{{0,0,0},{0,1,0},{0,0,0}}));
    }
}