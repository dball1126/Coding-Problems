


var bstToGst = function(root) {
    
    const helper = (node, sum) => {
        if (!node) return 0;
        sum += node.val
        let right = helper(node.right, sum)
        let left = helper(node.left, sum)

        node.val = sum;
        return sum;
    }
};


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(-10);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(bstToGst(root))


var bstToGst = function(root) {
    var sum = 0;
    var traversal = function (node) {
        if (node === null) {
            return;
        }
        
        traversal(node.right);
        
        sum += node.val;
        node.val = sum;
        
        traversal(node.left);
    };
    
    traversal(root);
    
    return root;
};