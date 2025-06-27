class Solution {
    func rotate(_ matrix: inout [[Int]]) {
        for r in 0..<matrix.count {
            for c in r..<matrix.count {
                var temp = matrix[r][c]
                matrix[r][c] = matrix[c][r]
                matrix[c][r] = temp
            }
            var lo = 0, hi = matrix.count - 1
            while lo < hi {
                matrix[r].swapAt(lo, hi)
                lo += 1
                hi -= 1
            }
        }
    }
}