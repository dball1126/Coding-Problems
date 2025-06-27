class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var idxs: [Int:Int] = [:]

        for i in 0..<nums.count {
            if let idx = idxs[target - nums[i]] {
                return [i, idx]
            }
            idxs[nums[i]] = i
        }
        return []
    }
}