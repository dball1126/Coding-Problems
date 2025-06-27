package spaced_rep_nov_2024;

import java.util.HashMap;
import java.util.Map;

class Solution {
    public double soupServings(int n) {

        int[] A = new int[]{100,75,50,25};
        int[] B = new int[]{0,25,50,75};

     
        Map<String, Double> map = new HashMap<String, Double>();
        double res = dp(map, A, B, n, n, 1);

        return res;
    }

    public double dp(Map<String,Double> map, int[] A, int[] B, int nA, int bB, double total) {
        if (nA <= 0.00 && bB <= 0.00) return total /2 ;
        if (nA  <= 0.00) return total;
        if (bB <= 0.00) return 0.0;
        String key = nA + " :" + bB + ":" + total; 
        if (map.containsKey(key)){ return map.get(key);}
        double result = 0.0;

        for (int i = 0; i < 4; i++) {
            int v1 = nA - A[i];
            int v2 = bB - B[i];
            System.out.println(key);

            result += dp(map, A, B, v1, v2, total / 4);
        }
        map.put(key, result);
        return result;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        System.out.println(sol.soupServings(660295675));
    }
}