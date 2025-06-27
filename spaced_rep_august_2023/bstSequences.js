const bstSequences = (root) => {
    if (!root) return []
    const result = []


    const generateSeq = (node, curr, left, right) => {
        if (!node) return [...curr, ...left, ...right]
        let leftArr = [], rightArr = []
        if (node.left) {
            leftArr = generateSeq(node.left, [...curr, node.val], left, right)
        }
        if (node.right) {
            rightArr = generateSeq(node.right, [...curr, node.val], left, right)
        }
        return [node.val, ...leftArr, ...rightArr]
    }

    let left = generateSeq(root.left, [], [], [])
    let right = generateSeq(root.right, [], [], [])

    const interLeave = (pre, left, right) => {
        if (!left.length || !right.length){
             return result.push([...pre, ...left, ...right])
        }

        if (left.length) {
            pre.push(left.shift())
            interLeave(pre, left, right)
            left.unshift(pre.pop())
        }
        if (right.length) {
            pre.push(right.shift())
            interLeave(pre, left, right)
            right.unshift(pre.pop())
        }
    }
    interLeave([root.val], left, right)
    return result
}

class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
const n1 = new Node(3)
const n2 = new Node(1)
const n3 = new Node(2)
const n4 = new Node(4)
const n5 = new Node(5)
const n6 = new Node(6)
n1.left = n2
n2.right = n3
n1.right = n4
n4.right = n5

console.log(bstSequences(n1))



// [3,1,2,5,4,6]