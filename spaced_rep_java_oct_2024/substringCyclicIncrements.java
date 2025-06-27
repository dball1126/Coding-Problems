package spaced_rep_java_oct_2024;

import java.util.Arrays;

class Solution {
    public boolean canMakeSubsequence(String s1, String s2) {
        int n = s1.length(); int m = s2.length();

        int memo[][] = new int[n+1][m+1];

        for (int i = 0; i < n; i++) {

            Arrays.fill(memo[i], 2);
        }


        return dp(memo, s1, s2, 0 , 0) == 1;
    }

    public int dp(int[][] memo, String s1, String s2, int i, int j) {
        if (j >= s2.length()) return 1;
        if (i >= s1.length()) return 0;
        if (memo[i][j] != 2) return memo[i][j];
        int val = 0;
        
        if (s1.charAt(i) == s2.charAt(j)) {
            val = dp(memo, s1,s2, i+1, j+1);
        } else {
            int v1 = ((int) s1.charAt(i)) + 1; int v2 = (int) s2.charAt(j);
            String a = "a";
            v1 -= ((int) a.charAt(0));
            v2 -= ((int) a.charAt(0));
            if (v1 >= 26) v1 = 0;
            if (v1 == v2) {
                return dp(memo, s1,s2,i+1, j+1);
            } else {
                return dp(memo, s1,s2,i+1, j);
            }
        }

        return memo[i][j] = val;
    }
}