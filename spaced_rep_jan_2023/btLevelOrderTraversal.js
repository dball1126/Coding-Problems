// Level Order Traversal
// Time and Space: O(n)
var levelOrder = function(root) {
    if (!root) return []
    let allLevels = []
    let levels = [[root]]
    while (levels.length) {
        let level = levels.shift();
        let curr = []
        let nextLevel = []
        level.forEach(node => {
            curr.push(node.val)
            if (node.left) nextLevel.push(node.left)
            if (node.right) nextLevel.push(node.right)
        })
        allLevels.push(curr)
        if (nextLevel.length) levels.push(nextLevel)
    }
    return allLevels
};
