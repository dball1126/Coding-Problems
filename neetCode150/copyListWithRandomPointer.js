function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

// Time & Space: O(n) + O(n) = O(n)
var copyRandomList = function(head) {
    let curr = head, newHead = null, nodeMap = new Map();

    while (curr) {
        let newNode = new Node(curr.val, curr.next, curr.random)
        nodeMap.set(curr, newNode)
        curr = curr.next;
    }
    curr = head;
    currNewHead = head;
    while (curr) {
        if (!newHead) {
            newHead = nodeMap.get(curr)
        }
        currNewHead = nodeMap.get(curr)
        if (curr.next) currNewHead.next = nodeMap.get(curr.next)
        if (curr.random) currNewHead.random = nodeMap.get(curr.random)
        currNewHead = currNewHead.next;
        curr = curr.next;
    }

    return newHead;
};
