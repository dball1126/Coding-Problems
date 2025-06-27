class Solution {
    func isValid(_ s: String) -> Bool {
        var stack: [Character] = []
        
        for (i, c) in s.enumerated() {
            if c == ")" {
                if stack.popLast() != "(" { return false}
            } else if c == "}" {
                if stack.popLast() != "{" { return false}
            } else if c == "]" {
                if stack.popLast() != "[" { return false}
            } else {
                stack.append(c)
            }
        }
        return stack.isEmpty
    }
}