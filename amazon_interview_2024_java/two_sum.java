import java.util.HashSet;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Vector;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int[] result =  new int [2];

        for (int i = 0; i < nums.length; i++) {

            int diff = target - nums[i];

            if (map.containsKey(diff)) {
                result[0] = i;
                result[1] = map.get(diff);
                return result;
            }

            if (!map.containsKey(nums[i])) {
                map.put(nums[i], i);
            }
        }

        return result;
    }
}