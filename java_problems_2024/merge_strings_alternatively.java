package java_problems_2024;

class Solution {
    public String mergeAlternately(String word1, String word2) {
        int i = 0; int j = 0; int n = word1.length();
        int m = word2.length();
        String result = "";

        while (i < n || j < m) {
            if (i < n) {
                result += word1.charAt(i);
                i++;
            }
            if (j < m) {
                result += word2.charAt(j);
                j++;
            }
        }
        return result;
    }
}