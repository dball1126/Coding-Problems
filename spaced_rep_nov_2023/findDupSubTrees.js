/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let result = [], resultSet = new Set(), zeroDegrees = new Map(), indegrees = new Map(), dups = new Map()

    const build = (nde, parent) => {
        if (!nde) return;
        if (!dups.has(nde.val)) dups.set(nde.val, 0)
        dups.set(nde.val, dups.get(nde.val) + 1)

        if (!nde.left && !nde.right && parent) {
            if (!zeroDegrees.has(nde.val)) {
                zeroDegrees.set(nde.val, [])
            }
            zeroDegrees.get(nde.val).push(nde)
        }
        if (parent) {
            if (!indegrees.has(nde.val)) {
                indegrees.set(nde.val, [])
            }
            // shouldn't this be (parent) and not (nde)
            indegrees.get(nde.val).push(parent)
        }

        build(nde.left, nde)
        build(nde.right, nde)
    }
    build(root, null)
    let queue = [], visited = new Set()
    for (let [k, v] of dups) {
        if (v >= 2) {
            if (zeroDegrees.has(k)) {
                queue.push(...zeroDegrees.get(k))
            }
        }
    }
    console.log(queue)
// looks like the problem is nodes can have duplicate values
// redo and build with L R And P pointers  1L1R1
    while (queue.length) {
        let nde = queue.shift()
        visited.add(nde.val)
        if (indegrees.has(nde.val)) {
            if (dups.get(nde.val) >= 2) {
                if (!resultSet.has(nde.val)) {
                    result.push(nde)
                    resultSet.add(nde.val)
                }
            }
            for (let n of indegrees.get(nde.val)) {
                if (!visited.has(n.val)) {
                    visited.add(n.val)
                    queue.push(n)
                }
            }
        }
    }

    return result;
};