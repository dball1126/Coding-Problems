
  function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }

var maxLevelSum = function(root) {
    if (!root) return 0
    let max = -Infinity;
    let sum = 0;
    let resultQueue = [];
    let queue = [root];
    let children = [];
    let level = 0;
    let mainLevel = 0;

    while (queue.length) {
        let node = queue.shift();
        sum += node.val;

        if (node.left) children.push(node.left)
        if (node.right) children.push(node.right)

        if (!queue.length) {
        level += 1

            if (sum > max) {
                mainLevel = level
            }
            max = Math.max(max, sum)
            sum = 0;
            if(children.length)queue.push(...children)
            children = []
        }
    }
    return mainLevel
};
// [-100,-200,-300,-20,-5,-10,null]
// [989,null,10250,98693,-89388,null,null,null,-32127]

const node = new TreeNode(-100)
node.left = new TreeNode(-200)
node.right = new TreeNode(-300)
node.left.left = new TreeNode(-20)
node.left.right = new TreeNode(-5)
node.right.left = new TreeNode(-10)

console.log(maxLevelSum(node))