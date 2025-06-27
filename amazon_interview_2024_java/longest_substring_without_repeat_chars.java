import java.util.HashMap;

class Solution {
    public int lengthOfLongestSubstring(String str) {
        int s = 0; int e = 0; int n = str.length(); int longestSub = 0;
        HashMap<Character, Integer> count = new HashMap<>();
        while (e < n) {
            count.put(str.charAt(e), count.getOrDefault(str.charAt(e), 0) + 1);

            while (count.get(str.charAt(e)) > 1) {
                count.put(str.charAt(s), count.get(str.charAt(s)) - 1);
                if (count.get(str.charAt(s)) == 0) {
                    count.remove(str.charAt(s));
                }
                s++;
            }
            e++;
            longestSub = Math.max(longestSub, e - s);
        }
        return longestSub;
    }
}