
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
var insertIntoBST = function(root, val) {
    let newNode = new TreeNode(val);

    const insert = (node) => {
        if (!node) return;
        
        if (val > node.val && !node.right) {
            return node.right = newNode;
        }
        if (val < node.val && !node.left) {
            return node.left = newNode;
        }

        if (val > node.val) {
            insert(node.right)
        } else {
            insert(node.left)
        }
    }
    if (!root) return new TreeNode(val)
    insert(root)
    
    return root
};

let node = new TreeNode(4);
node.left = new TreeNode(2);
node.right = new TreeNode(7);
node.left.left = new TreeNode(1);
node.left.right = new TreeNode(3);

console.log(insertIntoBST(node, 5))