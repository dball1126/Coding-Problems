class Solution {
    func removeDuplicates(_ nums: inout [Int]) -> Int {
        var lo = 0, hi = 1;

        while hi < nums.count {

            if nums[lo] == nums[hi] {
                nums.remove(at: hi);
            } else {
                lo += 1;
                nums.swapAt(lo, hi);
            }
            hi += 1;
        }
        return lo + 1;
    }
}