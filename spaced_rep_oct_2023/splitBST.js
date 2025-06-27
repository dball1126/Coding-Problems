var splitBST = function(root, target,) {
    if (!root) return []
    let stack = [[root, null, null]]
    if (!root.left && !root.right) return [root, null]
    
    while (stack.length) {
        let [nde, parent, father] = stack.pop()

        if (nde.val === target) {
            if (parent) {
                if (parent.val > nde.val) {
                    parent.left = nde.right
                    nde.right = null
                } else {
                    parent.right = nde.right
                    nde.right = null
                }
                let p1 = father.left
                if (p1) {
                    let tmp = p1
                    if (!p1.right) {
                        p1  = null
                        father.left = null
                    } else {
                        father.left = nde.right
                        nde.right = null
                    }
                    return [tmp, root]
                }
                return [nde, root, father]
            } else {
                let right = nde.right
                nde.right = null
                return [nde, right, father]
            }
        }
        if (!father) father = nde
        if (nde.left) stack.push([nde.left, nde, father])
        if (nde.right) stack.push([nde.right, nde, father])
    }

    return []
};