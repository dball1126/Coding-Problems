class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {
        guard !nums.isEmpty else { return 0 }
        var maximum = nums[0]
        var currMax = nums[0]
        for idx in 1..<nums.count  {
            currMax = max(nums[idx], currMax + nums[idx])
            maximum = max(maximum, currMax)
        }
        return maximum
    }
}
var sol = Solution()
print(sol.maxSubArray([5,4,-1,7,8]))