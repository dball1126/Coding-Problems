package java_problems_2024;
import java.util.Stack;

class Solution {

    public int longestSubarray(int[] nums, int limit) {
            Stack<Integer> stk = new Stack<>();
            int longest = 0;
            for (int i = 0; i < nums.length; i++) {

                while (!stk.empty() && Math.abs(stk.get(0) - nums[i]) > limit ) {
                    stk.remove(0);
                }
                stk.add(nums[i]);
                longest = Math.max(longest, stk.size());
            }
            return longest;
    }
}
