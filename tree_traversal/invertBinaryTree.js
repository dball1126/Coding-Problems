/**
 * DFS.
 * Time and Space: O(n)
 */
var invertTree = function(root) {
    if (!root) return null;
    let tempLeft = root.left, tempRight = root.right
    root.left = invertTree(tempRight)
    root.right = invertTree(tempLeft)
    return root;
};