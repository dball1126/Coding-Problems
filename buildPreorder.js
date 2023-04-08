var constructFromPrePost = function(pre) {
    let root = null;
    let helper = (pre, curr) => {
        if (!pre.length) return;
        let current = new TreeNode(pre.shift())
        if (!root) {
            curr = current;
            root = Object.assign(current)
        } else if (curr.val < current.val ) {
            curr.right = current;
            curr = current;
        } else {
            curr.left = current;
            curr = current
        }
        helper(pre, curr)
    }
    helper(pre)
    return root
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(4);
root.left = new TreeNode(1);
root.right = new TreeNode(6);
 root.right.right = new TreeNode(7);
 root.right.right.right = new TreeNode(8);
 root.right.left = new TreeNode(5)
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(2);
root.left.right.right = new TreeNode(3)


console.log(constructFromPrePost([1,2,3,4,5,6]))