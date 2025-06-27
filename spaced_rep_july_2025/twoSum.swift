
class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var idxs:[Int:Int] = [:]
        for (i, n) in nums.enumerated() {
            if var idx = idxs[target - n] {
                return [idx, i]
            }
            idxs[n] = i
        }
        return []
    }
}