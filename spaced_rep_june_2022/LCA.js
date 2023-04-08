class Node {
    val = null;
    left = null;
    right = null;
    constructor(val) {
        this.val = val;
    }
}

/**
 * parent pointers, two loops, time and space O(n)
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!p || !q) return false;
    let mainNode = null;
    const find = (n, t, sign) => {
        if (!n) return;
        if (n.val === t.val) {
            if (sign === "p") n.pFound = true;
            if (sign === "q") n.qFound = true;
        }
        if (n.qFound && n.pFound) {
            if (!mainNode) mainNode = n;
            return n;
        }
        if (n.val === t.val) {
            return n
        }

        let n1 = find(n.left, t, sign)
        let n2 = find(n.right, t, sign)

        if (n1) {
            if (n1.pFound) n.pFound = true
            if (n1.qFound) n.qFound = true
            if (n.qFound && n.pFound) {
                if (!mainNode) mainNode = n;
                return n;
            }
            return n
        }
        if (n2) {
            if (n2.pFound) n.pFound = true
            if (n2.qFound) n.qFound = true
            if (n.qFound && n.pFound) {
                if (!mainNode) mainNode = n;
                return n;
            }
            return n
        }
        return;
    }
    let result = find(root, p, "p")
    let result2 = find(root, q, "q")
    return mainNode
};