package spaced_rep_java_oct_2024;

import java.util.HashMap;
import java.util.Map;

class Solution {
    public int minimumDeletions(String str) {
        int n = str.length(); int min = str.length();

        Map<String, Integer> map = new HashMap<>();




        return dp(map, str, n, min);
    }
    public int dp(Map<String, Integer> map, String str, int n, int min) {



        return min;
    }
    private class Item {
        String curr = "";
        int idx = 0;
    }
}
// abab