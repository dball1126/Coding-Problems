
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var findMode = function(root) {
    //  console.log
    if (!root) return null;
    const hash = {};

    const helper = (node) => {
        console.log(node)
        if (!node) return;
        if (hash[node.val]) {
            hash[node.val] += 1;
        } else {
            hash[node.val] = 1
        }
        helper(node.left)
        helper(node.right)
        // return node;
    }

    helper(root)
    let mValue = Math.max(...Object.values(hash))
    let result = []
    for(key in hash) {
        if (hash[key] === mValue) {
            result.push(parseInt(key))
        }
    }
    return result
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 

const node = new TreeNode(0)
// node.left = new TreeNode(2)
// node.right = new TreeNode(2)
// node.right.right = new TreeNode(2)
// node.left.left = new TreeNode(1)
// node.left.right = new TreeNode(3)

console.log(findMode(node))