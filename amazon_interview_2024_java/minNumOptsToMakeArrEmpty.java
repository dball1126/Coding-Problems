import java.util.HashMap;
import java.util.Map;

class Solution {
    public int minOperations(int[] nums) {

        Map<Integer, Integer> freq = new HashMap<>();
        int minOpts = 0;
        for (int i = 0; i < nums.length; i++) {
            freq.put(nums[i], freq.getOrDefault(nums[i], 0) + 1);
        }

        for (Map.Entry<Integer, Integer> entry: freq.entrySet()) {
            Integer key = entry.getKey();
            Integer val = entry.getValue();
            if (val == 1) return -1;
            if (val == 2) {
                minOpts++;
            } else {
                if (val % 3 == 0) {
                    minOpts += (val / 3);
                } else {
                   if (val % 3 == 2) {
                    minOpts += 1 + ((int)Math.floor(val / 3));
                   } else if (val == 4) {
                    minOpts += 2;
                   } else {
                    minOpts += (2 + ((int)Math.floor(val / 3) - 1));
                   }
                }

            }
        }
        return minOpts;
    }
}


