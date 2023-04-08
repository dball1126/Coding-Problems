class Node {
    val;
    left = null
    right = null;
    constructor(val) {
        this.val = val;
    }
}

let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(3)
let n4 = new Node(4)
// let n5 = new Node(5)
n1.left = n2
n1.right = n3
// n2.left = n4


const treeHeights = (n) => {
    if (!n) return {max: 0, min: 0};
    if (!n.left && !n.right) return {max: 1, min: 1};
    let left = maxRight(n.left)
    let right = maxLeft(n.right)
    return {max: Math.max(left, right) + 1, min: Math.min(left, right) + 1}
}







const maxLeft = (n) => {
    if (!n) return 0
    let num = 1;
    while (n.left){
        num++
        n = n.left
    }
    return num
}
const maxRight = (n) => {
    if (!n) return 0
    let num = 1;
    while (n.right){
        num++
        n = n.right
    }
    return num
}
var countNodes = function(node) {
    if (!node) return 0;
    if (!node.left && !node.right) return 1;
    const dfs = (n) => {
        if (!n) return 0;
        
        let left = maxLeft(n.left)
        let right = maxRight(n.right)
       if (left === right) {
            return (2 ** (left+1))-1
            right = 0
        } else {
            left = countNodes(n.left)
            right = countNodes(n.right)
        }
        return left + right + 1
    }
    return dfs(node)
};


console.log(treeHeights(n1))



/**
 * 
 */









