const binaryTreePaths = (root) => {
    const mainArr = [];

    const helper = (node, str) => {
        if (!node.left && !node.right) {
            str += node.val
        } else {
            str += (node.val + "->")
        }

        if (node.left) {
            helper(node.left, str)
        }
        if (node.right) helper(node.right, str)
        if (!node.left && !node.right) {
            mainArr.push(str)
            return;
        } 
    }
    helper(root, "");

    return mainArr
}

 function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
     
     let root = new TreeNode(1);
     root.left = new TreeNode(2);
     root.right = new TreeNode(3);
    //  root.right = new TreeNode(99);
     root.left.left = new TreeNode(4);
     root.left.right = new TreeNode(5);
     root.left.right.right = new TreeNode(7)
     root.left.right.left = new TreeNode(8)


     console.log(binaryTreePaths(root))