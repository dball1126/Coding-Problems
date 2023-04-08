/**
 * Time: O(1) + O(n) + O(n) = O(n) 
 * Space: O(n) worst case....(-)(h) average
 */

const setVal = (node, dir, val) => {
    if (dir === "one") {
        node.found1 = val
    } else {
        node.found2 = val
    }
}

var lowestCommonAncestor = function(root, p, q) {
    let result;
    const dfs = (node, found, val) => {
        if (!node) return;
        if (node.val === val) {
            setVal(node, found, val)
            if (result === undefined && node.found1 !== undefined && node.found2 !== undefined) {
                result = node
            }
            return true;
        }
        let f1 = dfs(node.left, found, val)
        let f2 = dfs(node.right, found, val)
        if (f1 !== undefined || f2 !== undefined) {
            setVal(node, found, val)
        }
        if (result === undefined && node.found1 !== undefined && node.found2 !== undefined) {
            result = node
            return;
        }
        if (f1 !== undefined || f2 !== undefined || node.val === val) {
            return true
        }
    }
    dfs(root, "one", p.val)
    dfs(root, "two", q.val)
    return result
};