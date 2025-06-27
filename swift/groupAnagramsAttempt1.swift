class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        var groups: [String:[String]] = [:]
        let char: Character = "a"
        guard let auint = char.asciiValue else {return []}
        let a: Int = Int(auint)

        for s in strs {
            var counts: [Int] = Array(repeating: 0, count: 26)

            for char in s {
                guard let charAscii = char.asciiValue else { continue }
                let idx: Int = Int(charAscii) - a

                if (idx >= 0 && idx <= 26) {
                    counts[idx] += 1
                }
            }
            let key = counts.map { String($0) }.joined(separator: "#") // Concatenate counts with a separator
            print(key)
            groups[key, default: []].append(s)
        }

        return Array(groups.values)
    }
}


var sol: Solution = Solution()
print(sol.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))