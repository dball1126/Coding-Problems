class Solution {
    func isAnagram(_ s: String, _ t: String) -> Bool {
        var map:[Character:Int] = [:]

        for c in s {
            if let item = map[c] {
                map[c] = 1 + item
            } else {
                map[c] = 1
            }
        } 
        
        for c in t {
            if let item = map[c] {
                map[c] = item - 1
                if let check = map[c] {
                    if (check == 0) {
                        map[c] = nil
                    }
                }
            } else {
                return false
            }
        }
        return map.isEmpty()
    }
}