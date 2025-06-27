class Solution {
    func removeElement(_ nums: inout [Int], _ val: Int) -> Int {
        var hi = 0
        var lo = 0

        while hi < nums.count {
            if nums[hi] == val {
               if hi+1 < nums.count {
                nums.swapAt(hi,hi+1)
               }
            }
            hi += 1
        }       
        return hi
    }
}

var sol: Solution = Solution()
var nums = [2,2,3,4]
print(sol.removeElement(&nums, 2))