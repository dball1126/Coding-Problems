class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {
        var currMax: Int = nums[0], mainMax: Int = nums[0]
        for i in 1..<nums.count {
            currMax = max(nums[i], currMax + nums[i])
            mainMax = max(mainMax, currMax)
        }
        return mainMax       
    }
}