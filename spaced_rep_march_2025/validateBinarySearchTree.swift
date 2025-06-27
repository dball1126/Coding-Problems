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
class Solution {
    func isValidBST(_ root: TreeNode?) -> Bool {
        return isValidBST(root, min: Int.min, max: Int.max)
    }

    func isValidBST(_ root: TreeNode?, min: Int, max: Int) -> Bool {
        if root == nil {
            return true
        }
        var left: Bool = isValidBST(root.left, min: min, max: root.val)
        var right: Bool = isValidBST(root.right, min: root.val, max : max)

        return left && right && (root.val < max) && (root.val > min)
    }
}