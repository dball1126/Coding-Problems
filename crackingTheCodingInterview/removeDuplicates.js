class Node {
    val;
    next = null;
    constructor(val) {
        this.val = val;
    }
}

const removeDups = (n) => {
    let set = new Set();
    let head = n, prev = null, curr = n
    while (curr) {
        if (!set.has(curr.val)) {
            set.add(curr.val)
            prev = curr;
        } else {
            prev.next = curr.next
        }
        curr = curr.next;
    }
    return head
}

let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(1)
let n4 = new Node(3)

n1.next = n2
n2.next = n3
n3.next = n4

console.log(removeDups(n1))