class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var map: [Int:Int] = [:]

        for (i, n) in nums.enumerated() {
            if let idx = map[target - n] {
                return [i, idx]
            }
            map[i] = n
        }   
        return []    
    }
}