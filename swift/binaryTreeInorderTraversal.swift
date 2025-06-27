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


// class Solution {
//     func inorderTraversal(_ root: TreeNode?) -> [Int] {

//         func recurse(_ node: TreeNode?) -> [Int] {
//             guard var n = node else { return [] }
//             var result: [Int] = []
//             var left: [Int] = recurse(n.left)
//             var right: [Int] = recurse(n.right)
//             return left + [n.val] + right
//         }   

//         return recurse(root)    
//     }
// }