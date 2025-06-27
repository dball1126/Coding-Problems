package java_problems_2024;

class Solution {
    public void moveZeroes(int[] nums) {
        int i = nums.length-1;
        while (i >= 0 && nums[i] == 0) i--;

        for (int j = i-1; j >= 0; j--) {
            if (nums[j] == 0 && j < i) {
                swap(i, j, nums);
                while (i >= 0 && nums[i] == 0) i--;
                
            }
        }

    }
    private void swap (int i, int j, int[] arr) {
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}