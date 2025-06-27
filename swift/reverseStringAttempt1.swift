class Solution {
    func reverseString(_ s: inout [Character]) {
        var lo = 0, hi = s.count - 1
        while lo < hi {
            s.swapAt(lo, hi)
            lo += 1
            hi -= 1
        }
    }
}