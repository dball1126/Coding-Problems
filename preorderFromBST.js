
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
 var bstFromPreorder = function(preorder) {
    if (!preorder.length) return null;
    let stack = [];
    let root;

    for (let i = 0; i < preorder.length; i++) {
        const node = new TreeNode(preorder[i]);
        let lastRemovedNode = null;

        while (stack.length && stack[stack.length -1].val < node.val) {
            lastRemovedNode = stack.pop();
        }
        
        if (lastRemovedNode) {
            lastRemovedNode.right = node;
        }

        if (!root) root = Object.assign(node);

        if (!lastRemovedNode && stack.length) {
            stack[stack.length -1].left = node;
        }
        stack.push(node)
    }

    return root;
};

const node = new TreeNode(4)
node.left = new TreeNode(2)
node.right = new TreeNode(7)
node.left.left = new TreeNode(1)
node.left.right = new TreeNode(3)

console.log(bstFromPreorder([20,10,5,15,30,25,40]))