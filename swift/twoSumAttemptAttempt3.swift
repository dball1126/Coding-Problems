class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var dict:[Int:Int] = [:]

        for (i, n) in nums.enumerated() {
            if var idx = dict[target - n] {
                return [idx, i]
            }
            dict[n] = i
        }
        return []    
   }
}