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
var boundaryOfBinaryTree = function(root) {
    if (!root) return [];
    let leftBoundary = [], rightBoundary = [], leaves = [];

    const getLeftBoundary = (nde) => {
        if (!nde || (!nde.left && !nde.right)) return;
        leftBoundary.push(nde.val);
        if (!nde.left) {
            getLeftBoundary(nde.right);
        } else {
            getLeftBoundary(nde.left);
        }
    }

    const getRightBoundary = (nde) => {
        if (!nde || (!nde.left && !nde.right)) return;
        if (!nde.right) {
            getRightBoundary(nde.left);
        } else {
            getRightBoundary(nde.right);
        }
        rightBoundary.push(nde.val);
    }

    const getLeaves = (nde) => {
        if (!nde) return;
        if (!nde.left && !nde.right) {
            leaves.push(nde.val);
        } else {
            getLeaves(nde.left);
            getLeaves(nde.right);
        }
    }

    leftBoundary.push(root.val);
    getLeftBoundary(root.left);
    getLeaves(root.left);
    getLeaves(root.right);
    getRightBoundary(root.right);

    return leftBoundary.concat(leaves).concat(rightBoundary)
};