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
 * @return {number}
 */
function rob(root) {
    function helper(root) {
        if(!root) return [0, 0];
        
        const [leftMin, leftMax] = helper(root.left);
        const [rightMin, rightMax] = helper(root.right);
        const min = leftMax + rightMax;
        const max = Math.max(min, leftMin + rightMin + root.val);
        console.log("***************************************************")
        console.log("min: " + min) 
        console.log("max: " + max) 
        console.log("***************************************************")
        return [min, max];
    }
    
    return helper(root)[1];
};


function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }

let node1 = new TreeNode(3)
node1.left = new TreeNode(2)
node1.right = new TreeNode(3)
// node1.left.left = new TreeNode(1)



node1.left.right = new TreeNode(3)
node1.right.right = new TreeNode(1)

console.log(rob(node1))