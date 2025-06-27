class Solution {
    func longestCommonPrefix(_ strs: [String]) -> String {
        var longestStr: String = ""
        guard strs.count >= 1 else { return ""}
        guard strs.count > 1 else { return strs[0] }

        var len: String = strs[0]

        for i in len.indices {
            
            for j in 1..<strs.count {
                var curr: String = strs[j]
                var prev: String = strs[j-1]
                if i < curr.endIndex && i < prev.endIndex && (curr.index(i, offsetBy: 0) == prev.index(i, offsetBy: 0)) {
                    
                } else { return longestStr }

            }
            longestStr += String(len[i])
        }
        return longestStr
    }
}