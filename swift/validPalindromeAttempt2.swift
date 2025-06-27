class Solution {
    func isPalindrome(_ s: String) -> Bool {
        guard !s.isEmpty else {return false}
        var lo = s.startIndex
        var hi = s.index(before: s.endIndex)

        while lo < hi {
            if !(s[lo].isLetter || s[lo].isNumber) {
                lo = s.index(after: lo)
            } else if !(s[hi].isLetter || s[hi].isNumber) {
                hi = s.index(before: hi)
            } else {
                if s[lo].lowercased() != s[hi].lowercased() {
                    return false
                }
                lo = s.index(after: lo)
                hi = s.index(before: hi)
            }
        }
        return true
    }
}