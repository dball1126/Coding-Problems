

var constructMaximumBinaryTree = function(nums) {
  const root = new TreeNode();

    const divideAndConquer = (node, side, nums) => {
        if (nums.length === 0) return;

        let max = Math.max(...nums);
        let idx = nums.indexOf(max);
        let left = nums.slice(0, idx)
        let right = nums.slice(idx+1);
        nums.splice(idx, idx === 0 ? 1 : idx)

        // console.log(node)
        if (side === 'left') {
            node.left = new TreeNode(max)
            node = node.left
        } else if (side === 'right') {
            node.right = new TreeNode(max)
            node = node.right;
        } else {
            root.val = max;
        }
        divideAndConquer(node, 'left', left)
        divideAndConquer(node, 'right', right)
    }

    divideAndConquer(root, undefined, nums)
   
    return root
};


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
// [5,4,6,null,null,3,7]
let root = new TreeNode(5)
root.left = new TreeNode(4)
root.right = new TreeNode(6)
root.right.left = new TreeNode(3)
root.right.right = new TreeNode(7)

console.log(constructMaximumBinaryTree([3,2,1,6,0,5]))