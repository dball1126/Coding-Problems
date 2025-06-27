package spaced_rep_java_oct_2024;
import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;
import java.util.Map;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> groups = new HashMap<>();
        int n = strs.length;
        
        for(int i = 0; i < n; i++) {
            String key = "";

            Map<Character, Integer> count = new HashMap<>();
            String str = strs[i];
            for (char c = 'a'; c <= 'z'; c++) {
                System.out.println(c);
                count.put(c, 0); // Initialize with a default value of 0
            }

            for (int j = 0; j < str.length(); j++) {
                Character c = (Character) str.charAt(j);
                count.put(c, count.getOrDefault(c, 0) + 1);
            }

            for (Map.Entry<Character, Integer> entry: count.entrySet()) {
                key += (entry.getKey() + ":" + entry.getValue());
            }
          
            groups.put(key, groups.getOrDefault(key, new ArrayList<>()));
            groups.get(key).add(str);
        }

        List<List<String>> result = new ArrayList<>();

        for (Map.Entry<String, List<String>> entry : groups.entrySet()) {
            result.add(entry.getValue());
        }

        return result;
    }
    // {"eat","tea","tan","ate","nat","bat"} = [[eat, tea, ate], [bat], [tan, nat]]



    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
    }
}