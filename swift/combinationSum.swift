class Solution {
    func combinationSum(_ candidates: [Int], _ target: Int) -> [[Int]] {
        var result: [[Int]] = []

        func recurse(idx: Int, combo: inout [Int], sum: Int) -> [Int] {
            if sum == 0 {
                result.append(combo.map{$0})
                return combo
            }
            if idx >= candidates.count { return combo }
            if sum < 0 { return combo }

            for i in idx..<candidates.count {
                if sum - candidates[i] >= 0 {
                    combo.append(candidates[i])
                    recurse(idx: i, combo: &combo, sum: sum - candidates[i])
                    combo.popLast()
                }
            }
            return combo
        }
        var temp: [Int] = []
        recurse(idx: 0, combo: &temp, sum: target)
        return result
    }
}