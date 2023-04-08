
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
 var closestValue = function(root, target) {
    let closest = Infinity;
    let result = Infinity;
    
    const find = (node) => {
        if (!node || (result === node.val)) return;
        if (node.val === target) return result = node.val
        let value = Math.abs(target - node.val);
        // if (target > node.val) {
        //     value = target - node.val
        // } else {
        //     value = node.val - target
        // }

        if (closest > value && result != target) {
            closest = value
            result = node.val
        }
        if (node.left && closest > Math.abs(target - node.left.val)) {
            find(node.left)
        }
        if (node.right && closest > Math.abs(target - node.left.val)) {
            find(node.right)
        }
    }

    find(root)
    return result
};

let node1 = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(5)
let node4 = new TreeNode(1)
let node5 = new TreeNode(3)

node1.left = node2 
node2.left = node4 
node1.right = node5 
node1.right = node3 


console.log(closestValue(node1, -4));