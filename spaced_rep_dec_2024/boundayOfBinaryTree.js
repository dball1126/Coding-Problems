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
 * @return {number[]}
 */
// Iterative Depth-First-Search
// Time and Space: O(n)
var boundaryOfBinaryTree = function(root) {
    if (!root) return []
    let left = [], right = [], stack = [['', root]]

    while (stack.length) {
        let [dir, nde] = stack.pop();

        if (!dir || dir == 'l') { // handle collecting values
            left.push(nde.val)
        } else if (dir === 'r') {
            right.push(nde.val)
        } else {
            if (!nde.left && !nde.right) {
                dir[0] === 'l' ? left.push(nde.val) : right.push(nde.val)
            }
        }
        if (dir[0] === 'l') { // handle DFS
            if (!nde.left && nde.right && dir === 'l') {
                stack.push(['l', nde.right])
            } else {
                if (nde.right) stack.push(['ld', nde.right])
                if (nde.left) stack.push([dir, nde.left])
            }
        } else if (dir[0] === 'r') {
            if (!nde.right && nde.left && dir === 'r') {
                stack.push(['r', nde.left])
            } else {
                if (nde.left) stack.push(['rd', nde.left])
                if (nde.right) stack.push([dir, nde.right])
            }
        } else {
            if (nde.right) stack.push(['r',nde.right])
            if (nde.left) stack.push(['l',nde.left])
        }
    }
    for (let i = right.length-1; i >= 0; i--) left.push(right[i]) // reverse right side
    return left;
};

