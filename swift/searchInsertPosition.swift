class Solution {
    func searchInsert(_ nums: [Int], _ target: Int) -> Int {
        var lo = 0, hi = nums.count - 1

        while lo < hi {
            var mid: Int = (hi + lo) / 2

            if nums[mid] == target {
                return mid
            } else if nums[mid] > target {
                hi = mid
            } else {
                lo = mid + 1
            }
        }
        return lo
    }
}