class Solution {
    func isPalindrome(_ s: String) -> Bool {
       

      // FIX: Get a String.Index from the integer 'lo'
        guard var lo = s.index(s.startIndex, offsetBy: 0, limitedBy: s.endIndex) else {
            // This guard is important for safety, though for lo=0 it won't fail unless s is empty.
            // If s is empty, s.count - 1 will be -1, and this guard would prevent a crash
            // if you tried to access an invalid offset.
            return true // An empty string is a palindrome
        }
        guard var hi = s.index(s.startIndex, offsetBy: s.count-1, limitedBy: s.endIndex) else {
            return true
        }

           
        while lo < hi {
            if !isAlphanumeric(char: s[lo]) {
                lo = s.index(after: lo)
            } else if !isAlphanumeric(char: s[hi]){
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

    func isAlphanumeric(char: Character) -> Bool {
        return char.isLetter || char.isNumber
    }
}