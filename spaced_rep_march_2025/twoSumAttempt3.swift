class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        let map = [Int:Int]()

        for let (i, n) in nums.enumerated() {
            if let v = map[target - n] {
                return [i, v]
            }
            map[n] = i
        }
        return []
    }
}