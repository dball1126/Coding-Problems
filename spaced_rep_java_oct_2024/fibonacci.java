package spaced_rep_java_oct_2024;
import java.util.Map;
import java.util.HashMap;

class Solution {
    public int fib(int n) {
        Map<Integer, Integer> map = new HashMap<>();
        return dp(n, map);
    }

    public int dp(int n, Map<Integer, Integer> map) {
        if (n <= 0) return 0;
        if (n == 1) return 1;
        if (map.containsKey(n)) return map.get(n);
        
        int v1 = dp(n-1, map); int v2 = dp(n-2, map);

        map.put(n, v1 + v2);
        return v1+v2;
    }
}