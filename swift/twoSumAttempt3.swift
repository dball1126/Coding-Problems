class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var idxs: [Int:Int] = [:]

        for (i, n) in nums.enumerated() {
            if var idx = idxs[target - n] {
                return [i, idx]
            }
            idxs[n] = i
        }
        return []
    }
}