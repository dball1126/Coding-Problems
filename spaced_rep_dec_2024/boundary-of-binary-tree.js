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
// Depth First Search
// Time: O(n)
// Space: O(h) if the tree is balanced
var boundaryOfBinaryTree = function(root) {
    if (!root) return [];
    let result = [];
    const getLeftBoundary = (nde) => {
        if (!nde || !nde.left && !nde.right) return;
        result.push(nde.val);
        if (!nde.left) {
            getLeftBoundary(nde.right);
        } else {
            getLeftBoundary(nde.left);
        }
    }
    const getLeaves = (nde) => {
        if (!nde) return;
        if (!nde.left && !nde.right) return result.push(nde.val);
        getLeaves(nde.left);
        getLeaves(nde.right);
    }
    const getRightBoundary = (nde) => {
        if (!nde || !nde.left && !nde.right) return;
        if (!nde.right) {
            getRightBoundary(nde.left);
        } else {
            getRightBoundary(nde.right);
        }
        result.push(nde.val);
    }
    result.push(root.val);
    getLeftBoundary(root.left);
    getLeaves(root);
    getRightBoundary(root.right);
    return result;
};
