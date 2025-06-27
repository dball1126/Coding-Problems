class Solution {
    func isAnagram(_ s: String, _ t: String) -> Bool {
        var chars: [Character:Int] = [:]
        if s.count != t.count { return false }
        for c in s {
           var n = chars[c, default: 0]
           chars[c] = n + 1
        }
        for c in t {
            if var n = chars[c] {
                chars[c] = n - 1
            } else { return false }

            if var n = chars[c] {
                if n == 0 {
                    chars[c] = nil
                }
            }
        }
        return chars.isEmpty
    }
}