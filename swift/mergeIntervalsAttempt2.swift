class Solution {
    func merge(_ intervals: [[Int]]) -> [[Int]] {
        let arr = intervals.sorted{$0[0] < $1[0]}
        var x:Int = arr[0][0]
        var y: Int = arr[0][1]
        var results: [[Int]] = []
        for i in 1..<arr.count {
            if arr[i][0] <= y {
                y = max(y, arr[i][1])
            } else {
                results.append([x, y])
                x = arr[i][0]
                y = arr[i][1]
            }
        }
        results.append([x, y])
        return results;
    }
}