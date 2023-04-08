/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
/**
 * recursion
 * time: O(n * m)
 * space: O(n + m)
 */
 var isSubtree = function(n1, n2) {
    let nodes = [], valid = false
    const find = (n) => {
        if (!n) return [];
        let current = []
        if (n.val === n2.val) current.push(n);
        let l = find(n.left)
        let r = find(n.right)
        return [...current, ...l, ...r]
    }
    nodes = find(n1);
   
    const isValid = (node1, node2) => {
        if ((!node1 && node2) || (node1 && !node2)) {
            return false;
        }
        if (!node1 && !node2) return true;
        if (node1.val !== node2.val) return false;
        let l = isValid(node1.left, node2.left)
        let r = isValid(node1.right, node2.right)
        return l && r;
    }
    for (let i = 0; i < nodes.length; i++) {
        if (valid) break;
        const node = nodes[i];
        valid = isValid(node, n2)
    }
    return valid;
};