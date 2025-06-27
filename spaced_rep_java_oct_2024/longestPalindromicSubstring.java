package spaced_rep_java_oct_2024;

class Solution {
    public String longestPalindrome(String s) {
        if (s.length() <= 1) return s;
        int m = s.length();
        int maxIdxLeft = 0;
        int maxIdxRight = 0;
        boolean[][] dp = new boolean[m+1][m+1];

        for (int i = 0; i < s.length(); i++) {
            dp[i][i] = true;
        }

        for (int i = 0; i < s.length(); i++) {
            for (int j = i-1; j  >= 0; j--) {
                boolean isPalindrome = false;

                if (s.charAt(i) == s.charAt(j)) {
                    if (j+1 == i || dp[j+1][i-1]) {
                        isPalindrome = true;
                    }
                }
                if (isPalindrome) {
                    if ((i - j) >= (maxIdxRight - maxIdxLeft)) {
                        maxIdxLeft = j;
                        maxIdxRight = i;
                    }
                    dp[j][i] = isPalindrome;
                }
            }
        }
        String result = "";
        // build result
        for (int i = maxIdxLeft; i <= maxIdxRight; i++) {
            result += s.charAt(i);
        }
        return result;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println("*******************************************");
        System.out.println(sol.longestPalindrome(("zdafdabbalkdj")));
        System.out.println("*******************************************");
    }
}