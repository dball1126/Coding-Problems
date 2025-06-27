class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        var groups: [String:[String]] = [:]

        for s in strs {
            var arr: [Int] = Array(repeating: 0, count: 26)

            for (i, c) in s.enumerated() {
                var a: Character = "a"
                var idx: Int = 0
                if var item: UInt8 = c.asciiValue {
                    idx += Int(item)
                }
                if var char: UInt8 = a.asciiValue {
                    idx -= Int(char)
                }
                if idx >= 0 {
                    if arr[idx] > 0 {
                        arr[idx] += 1
                    } else {
                        arr[idx] = 1
                    }
                }
            }
            var key: String = ""

            for (i, n) in arr.enumerated() {
                if i > 0 {
                    key += "\(i):\(n)"
                }
            }
  
            if var item = groups[key] {
                item.append(s)
            } else {
                groups[key] = [s]
            }
        }
        // print(groups)
        return Array(groups.values)
    }
}

var sol: Solution = Solution()
print(sol.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))