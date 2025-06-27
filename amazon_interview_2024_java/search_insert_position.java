class Solution {
    public int searchInsert(int[] nums, int target) {
        int minResult = Integer.MAX_VALUE;
        int maxResult = Integer.MIN_VALUE;
        int low = 0; int high = nums.length-1;
        while (low < high) {
            int m = ((int)Math.floor((high+low)/ 2)) + 1;
            if (nums[m] == target) {
                return m;
            } else if (target > nums[m]) {
                low = m;
            } else {
                high = m - 1;
            }
        }
        if (nums.length > 0 && nums[low] >= target) {
            return low;
        } else {
            return low + 1;
        }
    }
}