class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        Integer i = m-1; 
        Integer j = n-1;
        Integer k = m + n - 1;

        while (i >= 0 || j >= 0) {

            if (i >= 0 && j < 0) {
                swap(nums1, i, nums1, k);
                i--;
            } else if (i < 0 && j >= 0) {
                swap(nums1, k, nums2, j);
                j--;
            } else if (nums1[i] >= nums2[j]) {
                swap(nums1, i, nums1, k);
                i--;
            } else {
                swap(nums1, k, nums2, j);
                j--;
            }

            k--;
        }

    }

    public void swap(int[] tgt, int i, int[] tgt2, int k) {
        int tmp1 = tgt[i];
        int tmp2 = tgt2[k];
        tgt2[k] = tmp1;
        tgt[i] = tmp2;
    }
}