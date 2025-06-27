import java.util.Stack;
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stk = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char v = s.charAt(i);

            if (v == '(' || v == '{' || v == '[') {
                stk.push(v);
            } else {
                if (stk.isEmpty()) return false;
                char v2 = stk.pop();
                if (v == ')' && v2 != '(') {
                    return false;
                } else if (v == ']' && v2 != '[') {
                    return false;
                } else if (v == '}' && v2 != '{') {
                    return false;
                }
            }
        }
 
        return stk.isEmpty();
    }
}