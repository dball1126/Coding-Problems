class Solution {
    func isValid(_ str: String) -> Bool {
        var stack = [Character]()

        for c in str {
            if c == "]" {
               if !stack.isEmpty() && stack.removeLast() != "[" {
                return false
               }
            } else if c == "}" {
                if !stack.isEmpty() && stack.removeLast() != "{" {
                return false
               }
            } else if c == ")" {
                if !stack.isEmpty() && stack.removeLast() != "(" {
                return false
               }
            } else {
                stack.append(c)
            }
        }
        return stack.isEmpty()
    }
}