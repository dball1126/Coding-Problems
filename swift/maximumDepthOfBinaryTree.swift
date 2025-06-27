class Solution {
    func maxDepth(_ root: TreeNode?) -> Int {
        guard var node = root else { return 0 }
        return max(maxDepth(node.left), maxDepth(node.right)) + 1;
    }
}