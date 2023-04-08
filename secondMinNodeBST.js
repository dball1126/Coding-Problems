
var findSecondMinimumValue = function(root) {
    const nums = [];

    const helper = (node) => {
        if (!node) return;
        if (!node.left && !node.right) {
            if (!nums.includes(node.val)) {
                return nums.push(node.val)
            }
            return;
        }

        helper(node.left)
        if (!nums.includes(node.val)) {
            return nums.push(node.val)
        }

        helper(node.right)
    }
    helper(root)
    console.log(nums)
    return nums.length === 2 ? nums[1] : -1
};


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


let root = new TreeNode(5)
root.left = new TreeNode(8)
root.right = new TreeNode(5)
// root.right.left = new TreeNode(5)
// root.right.right = new TreeNode(7)
// root.left.left = new TreeNode(2)
// root.left.left.left = new TreeNode(1)

console.log(findSecondMinimumValue(root))