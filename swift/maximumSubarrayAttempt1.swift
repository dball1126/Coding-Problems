class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {
        var maxSum = nums[0]
        var currSum = nums[0]

        for i in 1..<nums.count {
            currSum = max(nums[i], currSum + nums[i])
            maxSum = max(maxSum, currSum)
        }

        return maxSum
    }
}