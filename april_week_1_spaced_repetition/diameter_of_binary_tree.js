/**
 * Keep track of maxL and maxR, use left/right param
 * Time: O(n)
 * Space: O(1)
 * DFS
 */
const diameterOfBinaryTree = (root) => {
    if (!root.left && !root.right) return 1;

    const diameter = (mL, mR, node) => {
        if (!node.left && !node.right) return {mL, mR, d: 1}
        let left, right;

        if (node.left) {
            left = diameter(mL, mR, node.left)
            console.log(left)
            mL = Math.max(mL, left.mL+1, left.mR+1)
        }
        if (node.right) {
            right = diameter(mL, mR, node.right)
            console.log(right)
            mR = Math.max(mR, right.mR+1, right.mL+1)
        }

        if (!left) left = {mL: 0, mR: 0,d: 0}
        if (!right) right = {mR: 0, mL: 0,d: 0}
        let v1 = left.mL + right.mR;
        let v2 = left.mL + right.mL;
        let v3 = left.mR + right.mL
        let v4 = left.d;
        let v5 = right.d;

        let v = Math.max(v1,v2,v3,v4,v5)
        return (mL, mR, v)
    }

    const result = diameter(0,0, root)
    console.log(result)
    return result;
}
function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
}
let n1 = new TreeNode(1)
let n2 = new TreeNode(2)
let n3 = new TreeNode(3)
n1.right = n2;
n1.left = n3

console.log(diameterOfBinaryTree(n1))