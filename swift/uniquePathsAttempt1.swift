
class Solution {
    func uniquePaths(_ m: Int, _ n: Int) -> Int {
        var dp: [[Int]] = Array(repeating: Array(repeating: 0, count: m), count: n)
        dp[0][0] = 1
        for r: Int in 0..<n {
            for c: Int in 0..<m {
                if r - 1 >= 0 { dp[r][c] += dp[r-1][c]}
                if c - 1 >= 0 { dp[r][c] += dp[r][c-1]}
            }
        }
        return dp[n-1][m-1]
    }
}