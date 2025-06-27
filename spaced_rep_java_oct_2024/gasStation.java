package spaced_rep_java_oct_2024;
// gas = [1,2,3,4,5], cost = [3,4,5,1,2]
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int currIDx = 0;
        int currVal = gas[0] - cost[0];
        // get best idx starting point
        for (int i = 1; i < gas.length; i++) {
           int val = gas[i] - cost[i];
           if (val >= currVal) {
            currIDx = i;
            currVal = val;
           }
        }
System.out.println("maxI " + currIDx + " currVal: " + currVal);
        return -1;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        System.out.println(sol.canCompleteCircuit(new int[]{1,2,3,4,5}, new int[]{3,4,5,1,2}));
    }
}