// DFS
// Time and Space: O(n)
var isUnivalTree = function(root) {
    if (!root) return true;
    if (!root.left && !root.right) return true
    if (root.left  && root.left.val !== root.val) return false
    if (root.right && root.right.val !== root.val) return false
    return (true && isUnivalTree(root.left) && isUnivalTree(root.right))
};