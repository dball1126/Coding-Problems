import java.util.ArrayList;
import java.util.Arrays;
import java.util.Stack;

class Solution {
    public int[] platesBetweenCandles(String s, int[][] queries) {
        int n = s.length(); int m = queries.length;
        int[] prefix = new int[n];
        int[] suffix = new int[n];
        int[] result = new int[m];
        Arrays.fill(prefix, 0);
        Arrays.fill(suffix, 0);
        int sum = 0;
        Stack<Character> stack = new Stack<>();
        
        for (int i = 0; i < n; i++) {
            char v = s.charAt(i);
            if (v == '|') {
                int curr = 0;
                while (!stack.isEmpty()) {
                    if (stack.pop() == '*') curr++;
                }
                sum += curr;
                stack.push(v);
            } else if (!stack.isEmpty()) {
                stack.push(v);
            }
            prefix[i] = sum;
        }
        sum = 0; stack = new Stack<>();

        for (int i = n-1; i >= 0; i--) {
            char v = s.charAt(i);
            if (v == '|') {
                int curr = 0;
                while (!stack.isEmpty()) {
                    if (stack.pop() == '*') curr++;
                }
                sum += curr;
                stack.push(v);
            } else if (!stack.isEmpty()) {
                stack.push(v);
            }
            suffix[i] = sum;
        }
        System.out.println(Arrays.toString(prefix));
        System.out.println(Arrays.toString(suffix));

        for (int i = 0; i < m; i++) {
            int[] arr = queries[i];
            int currSum = prefix[arr[1]];
            System.out.println("***********");
            System.out.println("curSum: " + currSum);

            if (arr[0] - 1 >= 0) {
                currSum -= prefix[arr[0] - 1];
            System.out.println("prefix[arr[0] - 1]: " + prefix[arr[0] - 1]);

            }
            if (arr[1] + 1 < n) {
                currSum -= suffix[arr[1] + 1];
            System.out.println("suffix[arr[1] + 1]: " + suffix[arr[1] + 1]);

            }
            result[i] = currSum;
        }

        return result;
    }
    public static void main(String[] args) throws Exception {

        Solution sol = new Solution();
        int[] ans = sol.platesBetweenCandles("***|**|*****|**||**|*", new int[][]{{1,17},{4,5},{14,17},
    {5,11},{15,16}});
        System.out.println(Arrays.toString(ans));
    }
}