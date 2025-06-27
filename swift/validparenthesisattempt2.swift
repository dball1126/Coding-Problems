class Solution {
    func isValid(_ s: String) -> Bool {
        var stack: [Character] = []

        for c in s {
            if c == "]" {
                guard var last = stack.last, last == "[" else { return false }
                stack.popLast()
            } else if c == ")" {
                guard var last = stack.last, last == "(" else { return false }
                stack.popLast()
            } else if c == "}" {
                guard var last = stack.last, last == "{" else { return false }
                stack.popLast()
            } else {
                stack.append(c)
            }
        }
        return stack.isEmpty
    }
}