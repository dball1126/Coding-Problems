class Solution {
    func isPalindrome(_ s: String) -> Bool {
        var lo: String.Index = s.startIndex
        var hi: String.Index = s.index(before: s.endIndex)

        while lo < hi {
            var char1: Character = s[lo]
            var char2: Character = s[hi]

            if !(char1.isNumber || char1.isLetter) {
                lo = s.index(after: lo)
            } else if !(char2.isLetter || char2.isNumber) {
                hi = s.index(before: hi)
            } else if char1.lowercased() != char2.lowercased() {
                return false
            } else {
                lo = s.index(after: lo)
                hi = s.index(before: hi)
            }
        }
        return true
    }
}