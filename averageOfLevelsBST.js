 function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if (!root) return [];
    const result = [];
    let [children, queue, avgSum, count] = [[],[root], 0, 0];
    
    while (queue.length) {
        let node = queue.shift();
        avgSum += node.val;
        count += 1

        if (node.left) children.push(node.left)
        if (node.right) children.push(node.right)

        if (!queue.length) {
            result.push(avgSum / count);
            [avgSum, count] = [0, 0]
        if (children.length) queue.push(...children)
            children = []
        }
    }
    return result;
};

const node = new TreeNode(3)
// node.left = new TreeNode(9)
// node.right = new TreeNode(20)
// node.right.left = new TreeNode(15)
// node.right.right = new TreeNode(7)

console.log(averageOfLevels(node))