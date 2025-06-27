class Solution {
    public int maxProfit(int[] prices) {
        if (prices.length == 0) return 0;
        int maxSum = 0; int minVal = prices[0];

        for(int i = 1; i < prices.length; i++) {
            maxSum = Math.max(maxSum,
                prices[i] - minVal 
            );
            minVal = Math.min(minVal, prices[i]);
        }
        return maxSum;
    }
}