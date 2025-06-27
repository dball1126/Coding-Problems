class Solution {
    func searchInsert(_ nums: [Int], _ target: Int) -> Int {
        var lo = 0
        var hi = nums.count - 1

        while lo < hi {
            var m = (hi + lo) / 2
            var item = nums[m] 
                if item == target {
                    return lo
                } else if item > target {
                    hi = m
                } else {
                    lo = m
                }
            
        }
        return lo
    }
}