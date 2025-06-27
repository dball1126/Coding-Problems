package java_problems_2024;
class Solution {

    public int maxSubArray(int[] nums) {
        if (nums.length == 0) return 0;
        int result = nums[0];
        int[] dp = new int[nums.length+1];
        dp[0] = nums[0];

        for (int i = 1; i < nums.length; i++) {
            nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
            result = Math.max(result, nums[i]);
        }
        
        return result;
    }
}
