package spaced_rep_java_oct_2024;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

class containsDuplicate {
    // HashMap
    // Time & Space: O(n)
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        Map<Integer, Integer> idxs = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            if (idxs.containsKey(nums[i])) {
                Integer num = nums[i];
                Integer idx2 = idxs.get(num);
                if (Math.abs(i - idx2) <= k) return true;
                idxs.put(num, i);
            } else {
                idxs.put(Integer.valueOf(nums[i]), i);
            }
        }
        return false;
    }
}