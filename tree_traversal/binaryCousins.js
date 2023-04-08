var isCousins = function(root, x, y) {
    let p1, p2, n1, n2, p1H, p2H
    const dfs = (node, height) => {
        if (!node) return {val: false, h: 0}
        if (node.val === x) return {val: node.val, h: 1}

        let left = dfs(node.left, h: height)
    }

}