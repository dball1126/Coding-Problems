var getLonelyNodes = function(root) {
    if (!root) return []
    if (!root.left && !root.right) return [root.val]
    let result = []
    const dfs = (node, has) => {
        if (!node) return;
        if (!has) result.push(node.val)
        has = true
        if (!node.left || !node.right) has = false
        dfs(node.left, has)
        dfs(node.right, has)
    }
    dfs(root, true)
    return result
};