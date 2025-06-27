class Solution {
    func merge(_ intervals: [[Int]]) -> [[Int]] {
        var nums = intervals.sorted{$0[0] < $1[0]}
        var x = nums[0][0]
        var y = nums[0][1]
        var result: [[Int]] = []
        for i in 1..<nums.count {

            if nums[i][0] <= y {
                y = max(y, nums[i][1])
            } else {
                result.append([x, y])
                x = nums[i][0]
                y = nums[i][1]
            }
        }
        result.append([x, y])
        return result
    }
}