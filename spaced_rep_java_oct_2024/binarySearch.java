package spaced_rep_java_oct_2024;

class Solution {
    public int search(int[] nums, int target) {
        int low = 0; int high = nums.length-1;

        while (low <= high) {
            int m = ((int) Math.floor((high+low) / 2) );
      

            if (nums[m] == target)             {
                return m;
            } else if (target < nums[m]) {
                high = m -1;
            } else {
                low = m+1;
            }
        }

        return -1;
    }
    public static void main(String[] args) throws Exception {
        containsDuplicate sol = new containsDuplicate();

        System.out.println("value: " + sol.search(new int[]{-2,0,3,5,9,12}, 12));
    }
}