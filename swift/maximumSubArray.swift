class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {
        var maximum = nums[0]
        var currMax = nums[0]
        for i in 1..<nums.count {
            currMax = max(nums[i], nums[i] + currMax)
            maximum = max(currMax, maximum)
        }
        return maximum
    }
}