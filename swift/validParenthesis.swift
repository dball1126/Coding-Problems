class Solution {
    func isValid(_ s: String) -> Bool {

        guard !s.isEmpty else {
            return true
        }

        var arr: [Character] = [];

        for c: Character in s {

          
            if c == ")" {
                guard let p = arr.popLast(), p == "(" else { return false}
            } else if c == "}" {
                guard let p = arr.popLast(), p == "{" else { return false}
            } else if c == "]" {
                guard let p = arr.popLast(), p == "[" else { return false}
            } else {
                arr.append(c)
            }
        }
        return arr.isEmpty
    }
}
var sol = Solution();
var result = sol.isValid("()")
print("result \(result)")
