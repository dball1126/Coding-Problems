const checkSubTree = (n1, n2) => {
    let isValid = true, node = null;

    const findNode = (n) => {
        if (!n) return null;
        if (n.val === n2.val) {
            node = n;
            return n
        }
        findNode(n.left)
        findNode(n.right)
        return n
    }
    findNode(n1)
    if (!node) return false;

    const validTree = (t1, t2) => {
        if (!t1 && t2 || t1 && !t2) {
            isValid = false;
            return;
        }
        if (!t1 || !t2) return null;
        if (t1.val !== t2.val) {
            isValid = false
            return;
        }
        validTree(t1.left, t2.left)
        validTree(t1.right, t2.right)
        return;
    }
    validTree(node, n2)
    return isValid;
}


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
let n5 = new Node(5)
n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5

let nTest = new Node(6)

console.log(checkSubTree(n1, nTest))