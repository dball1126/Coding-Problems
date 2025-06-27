class Solution {
    func merge(_ intervals: [[Int]]) -> [[Int]] {
        var sortedArr = intervals.sorted{$0[0] < $1[0]}
        var curr: [Int] = sortedArr[0]
        var result: [[Int]] = []

        for i in 1..<sortedArr.count {
            var arr = sortedArr[i]
            var cy = curr[1]
            var x = arr[0]

            if x <= cy {
                curr[1] = max(cy, arr[1])
            } else {
                result.append(curr)
                curr = arr
            }
        }
        result.append(curr)
        return result
    }
}