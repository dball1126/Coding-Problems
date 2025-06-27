class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {
        var result:Int = nums[0]
        var curr:Int = nums[0]

        for i in 1..<nums.count {
            curr = max(nums[i], nums[i] + curr)
            result = max(result, curr)
        }
        return result
    }
}