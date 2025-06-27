class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var map: [Int:Int] = [:]

        for (i, n) in nums.enumerated() {
            if let item = map[target - n] {
                return [item, i]
            }
            map[n] = i
        }

        return []
    }
}