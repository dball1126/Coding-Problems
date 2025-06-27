class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {

        var map: [Int:Int] = [:]

        for (i, n) in nums.enumerated() {
            if var idx = map[target - n] {
                return [i, idx]
            }
            map[n] = i
        }
        return []        
    }
}