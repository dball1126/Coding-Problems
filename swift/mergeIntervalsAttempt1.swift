class Solution {
    func merge(_ intervals: [[Int]]) -> [[Int]] {
        var sorted = intervals
        sorted.sort{$0[0] < $1[0]}
        var result: [[Int]] = []

        var x = sorted[0][0]
        var y = sorted[0][1]

        for i in 1..<sorted.count {
            if sorted[i][0] <= y {
                y = max(y, sorted[i][1])
            } else {
                result.append([x, y])
                x = sorted[i][0]
                y = sorted[i][1]
            }
        }
        result.append([x, y])
        return result
    }
}