/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
 public class TreeNode {
    public var val: Int
    public var left: TreeNode?
    public var right: TreeNode?
    public init() {self.val = 0; self.left = nil; self.right = nil;} 
    public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil;}

}
    
class Solution {
    func invertTree(_ root: TreeNode?) -> TreeNode? {
        var node = root

        func dfs(_ nde: TreeNode?) -> TreeNode? {
            guard var n = nde else { return nde }
            var left: TreeNode? = dfs(n.left)
            var right: TreeNode? = dfs(n.right)

            n.right = left
            n.left = right
            return n            
        }
        return dfs(node)
    }
}