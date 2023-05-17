// Breadth-First-Search. Level Order Traversal
// Time: O(n)
// Space: log(n)...not counting output array
var levelOrderBottom = function(root) {
    if (!root) return []
    const reverseLevelOrder = [], queue = [[root]]

    while (queue.length) {
        let level = queue.shift();
        let lvl = [], nextLvl = []
        level.forEach(node => {
            lvl.push(node.val)
            if (node.left) nextLvl.push(node.left)
            if (node.right) nextLvl.push(node.right)
        })
        reverseLevelOrder.unshift(lvl)
        if (nextLvl.length) queue.push(nextLvl)
    }
    return reverseLevelOrder
};
