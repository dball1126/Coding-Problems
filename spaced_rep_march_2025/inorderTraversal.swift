
public class TreeNode {
    public var val: Int
    public var left: TreeNode?
    public var right: TreeNode?
    public init() { self.val = 0; self.left = nil; self.right = nil; }
    public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
    public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
        self.val = val
        self.left = left
        self.right = right
    }
}
 
class Solution {
    func inorderTraversal(_ root: TreeNode?) -> [Int] {
        guard var n = root else {
            return []
        }
        var stack: [Int] = []
        var order: [Int] = []
        var curr: TreeNode? = n

        while stack.count > 0 || curr != nil {
            while curr != nil && var currNode = curr.left {
                stack.push(curr)
                curr = currNode
            }
            if curr == nil {
                curr = stack.removeLast()
            }
            order.append(curr.val)
            curr = curr.right
        }

        return order
    }
}