class Node {
    val;
    next = null;
    constructor(val) {
        this.val = val;
    }
}

let n1 = new Node(7)
let n2 = new Node(1)
let n3 = new Node(6)

let n4 = new Node(5)
let n5 = new Node(9)
let n6 = new Node(2)
n1.next = n2
n2.next = n3


n4.next = n5
n5.next = n6

const sumLists = (L1, L2) => {
    let num1 = 0, num2 = 0, head = null, c = 10;

    while (L1) {
        if (num1 === 0) {
            num1 = L1.val
        } else {
            num1 = L1.val * c + num1
            c *= 10
        }
        L1 = L1.next;
    }
    c = 10
    while (L2) {
        if (num2 === 0) {
            num2 = L2.val
        } else {
            num2 = L2.val * c + num2
            c *= 10
        }
        L2 = L2.next;
    }
    let sum = num1 + num2;

    while (sum / 10 >= 1) {
        let node = new Node(sum % 10)
        if (!head) {
            head = node;
        } else {
            node.next = head;
            head = node;
        }
        sum = Math.floor( sum / 10)
    }
    let node = new Node(sum)
    node.next = head;

    return node;
}

console.log(sumLists(n1, n4))

