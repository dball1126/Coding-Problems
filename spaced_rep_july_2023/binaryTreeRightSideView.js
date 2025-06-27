// Time and Space: O(n)
// Iterative Level Order Traversal
var rightSideView = function(root) {
    if (!root) return []
    let queue = [[root]], result = []
    
    while (queue.length) {
        const level = queue.shift(), nextLvl = [];
        
        level.forEach((node, i) => {
            if (node.left) nextLvl.push(node.left)
            if (node.right) (nextLvl.push(node.right))
            if (i === level.length-1) result.push(node.val)
        })
        if (level.length) queue.push(nextLvl)
    }

    return result;
};

