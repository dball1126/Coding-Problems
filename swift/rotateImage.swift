class Solution {
    func rotate(_ matrix: inout [[Int]]) {
         let n = matrix.count
         for r in 0..<n {
            for c in r..<n {
                var num = matrix[r][c]
                matrix[r][c] = matrix[c][r]
                matrix[c][r] = num 
            }
            var lo = 0, hi = n-1
            while lo < hi {
                matrix[r].swapAt(lo, hi)
                lo += 1
                hi -= 1
            }
         }
    }
}