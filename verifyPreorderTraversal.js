var verifyPreorder = function(preorder) {
  if (!preorder.length) return true
  let currentRoot = preorder.shift();
  let min = -Infinity;
  
  while (preorder.length) {
      let current = preorder.shift();
      if (currentRoot < current) {
          currentRoot = current;
          min = Math.min(min, currentRoot)
      } else if (current < min) {
        return false;
      }
  }
  return true;
};


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const node = new TreeNode(4)
node.left = new TreeNode(2)
node.right = new TreeNode(7)
node.left.left = new TreeNode(1)
node.left.right = new TreeNode(3)

let nodes = [5,2,6,1,3]

console.log(verifyPreorder(nodes))