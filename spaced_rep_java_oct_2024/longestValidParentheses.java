package spaced_rep_java_oct_2024;

import java.util.Stack;

class Solution {

    // Bottom-Up Dynamic Programming. Stack.
    // Time and Space: O(n)
    public int longestValidParentheses(String s) {
        int[] dp = new int[s.length()+1];
        Stack<Integer> stack = new Stack<>();
        int max = 0;

        for (int i = 0; i < s.length(); i++) {
            int c = s.charAt(i);

            if (c == '(') {
                stack.push(i);
            } else {
                if (!stack.isEmpty()) {
                    int idx = stack.pop();
                    int v = 0; int v2 = 0;
                    if (i > 0) v = dp[i-1];
                    if (idx > 0) v2 = dp[idx-1];

                    dp[i] = 2 + v + v2;
                }
            }
            max = Math.max(max, dp[i]);
        }
        return max;
    } // ")()())"  = 4


    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.longestValidParentheses("()(())"));
    }
}