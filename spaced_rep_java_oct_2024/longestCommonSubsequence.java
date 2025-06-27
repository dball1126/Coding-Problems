package spaced_rep_java_oct_2024;

class Solution {
    // Bottom-Up Dynamic Programming. Longest Common Subsequence DP Pattern
    // Time and Space: O(n * m)
    public int longestCommonSubsequence(String text1, String text2) {
        int n = text1.length(); int m = text2.length();
        int dp[][] = new int[n+1][m+1];

        for (int i = n-1; i >= 0; i--) {
            for (int j = m-1; j >= 0; j--) {
                int v1 = dp[i+1][j];
                int v2 = dp[i][j+1]; 
                int v3 = 0;
                if (text1.charAt(i) == text2.charAt(j)) {
                    v3 = 1 + dp[i+1][j+1];
                }
                dp[i][j] = Math.max(v1, Math.max( v2,v3));
            }
        }
        return dp[0][0];
    }
    // text1 = "abcde", text2 = "ace"   =   3
}

