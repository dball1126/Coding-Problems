class Node {
    val;
    left = null
    right = null;
    constructor(val) {
        this.val = val;
    }
}



const successor = (node, target) => {
    if (!node || !target) return null;
    let found = false, curr = node, stack = []
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr)
            curr = curr.left;
        }
        if (!curr) curr = stack.pop();
        if (found) return curr;
        if (target.val === curr.val) found = true;
        curr = curr.right;
    }
    return null
}

let n1 = new Node(1)
let n2 = new Node(2)
let n4 = new Node(4)
let n5 = new Node(5)
let n8 = new Node(8)
n1.left = n2
n2.left = n4
n2.right = n5
n5.left = n8

console.log(successor(n1, n8))