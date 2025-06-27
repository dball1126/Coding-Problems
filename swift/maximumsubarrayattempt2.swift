class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {
        var maxSub: Int = 0
        var currSub: Int = 0
        for n in nums {
            currSub = max(n, n + currSub)
            maxSub = max(maxSub, currSub)
        }
        return maxSub
    }
}