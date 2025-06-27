class Solution {
    func isValid(_ str: String) -> Bool {
        var stack = [Character]()

        for let c in str {
            if c == "]" {
                if stack.removeLast() != "[" {
                    return false
                }
            } else if c == "}" {
                if stack.removeLast() != "{" {
                    return false
                }
            } else if c == ")" {
                if stack.removeLast() != "(" {
                    return false
                }
            } else {
                stack.append(c)
            }
        }
        return stack?.count > 0
    }
}

