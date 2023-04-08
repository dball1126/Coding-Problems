/** BFS¢
 * Time: O(n) for nodes in tree
 * Space: O(n)
 */
 var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let paths = [], dir = "left", queue = [[root]];
    while (queue.length) {
        let level = queue.shift(), levelPaths = [], levelNodes = []
        while (level.length) {
            let node = level.shift()
            if (dir === "left") {
                levelPaths.push(node.val)
            } else {
                levelPaths.unshift(node.val)
            }
            if (node.left) {
                levelNodes.push(node.left)
            }
            if (node.right) {
                levelNodes.push(node.right)
            }
        }
        if (levelNodes.length) queue.push(levelNodes)
        dir = dir === "right" ? "left" : "right"
        paths.push(levelPaths)
    }
    return paths
};