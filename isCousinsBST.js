var isCousins = function(root, x, y) {

    let height1 = 0
    let height2 = 0
    let parent1 = undefined
    let parent2 = undefined
    const getHeight = (root, node, first) => {
        if (!root) return undefined;
        if (root.val === node.val) return 0;

        let left = getHeight(root.left, node, first)
        if (left === 0) {
            if (first === "first") {
                parent1 = root.val;
            } else {
                parent2 = root.val;
            }
        }
        
        let right = getHeight(root.right, node, first)
        if (right === 0) {
            if (first === "first") {
                parent1 = root.val;
            } else {
                parent2 = root.val;
            }

        }

        if (left !== undefined) {
            if (first === "first") {
                height1 = left +1;
            } else {
                height2 = left +1;
            }
            return left + 1;}
        
        if (right !== undefined) {
            if (first === "first") {
                height1 = right +1;
            } else {
                height2 = right +1;
            }
            return right + 1;}
      
        return undefined
    }

    height1 = getHeight(root, x, 'first')
    height2 = getHeight(root, y, 'second')
    if (height1 === height2 && parent1 !== parent2) {
        return true;
    } else {
        return false;
    }
};

console.log("height1 " + height1)
console.log("height2 " + height2)
console.log("parent1 " + parent1)
console.log("parent2 " + parent2)



function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);
node.left.right = new TreeNode(4);
node.right.right = new TreeNode(5)

let leftNode = new TreeNode(4)
let rightNode = new TreeNode(5)

console.log(isCousins(node, leftNode, rightNode))


