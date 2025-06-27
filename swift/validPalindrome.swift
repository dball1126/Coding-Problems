class Solution {
    func isPalindrome(_ s: String) -> Bool {
        
      // FIX: Get a String.Index from the integer 'lo'
        guard var l = s.index(s.startIndex, offsetBy: 0, limitedBy: s.endIndex) else {
            // This guard is important for safety, though for lo=0 it won't fail unless s is empty.
            // If s is empty, s.count - 1 will be -1, and this guard would prevent a crash
            // if you tried to access an invalid offset.
            return true // An empty string is a palindrome
        }
        guard var h = s.index(s.startIndex, offsetBy: s.count-1, limitedBy: s.endIndex) else {
            return true
        }

        while l < h {
            var lC: Character = s[l], rC: Character = s[h]

            if !(lC.isLetter || lC.isNumber) {
                l = s.index(after: l)
            } else if !(rC.isLetter || rC.isNumber) {
                h = s.index(before: h)
            } else {
                if String(lC).lowercased() != String(rC).lowercased() {
                    return false
                }
                l = s.index(after: l)
                h = s.index(before: h)
            }
        }

        return true
    }
}