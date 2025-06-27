package spaced_rep_java_oct_2024;

import java.util.Stack;

class Solution {
    // Time and Space: O(n)
    public int minOperations(String[] logs) {
        Stack<String> stack = new Stack<>();
        for (String log: logs) {
            if (log.equals("../")) {
                if (!stack.isEmpty()) stack.pop();
            } else if (log.equals("./")) {
                continue;
            } else {
                stack.push(log);
            }
        }
        return stack.size();
    }
    // ["d1/","d2/","./","d3/","../","d31/"] = 3

    public static void main(String[] args) {
        Solution sol = new Solution();
        
        System.out.println(sol.minOperations(new String[]{"d1/","d2/","../","d21/","./"}));
    }
}