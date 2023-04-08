// Time: O(n) one pass, Space: O(n)
class DblNode {
    prev = null; next = null; node = null;
    constructor(prev, next, node) {
        this.prev = prev; this.next = next; this.node = node;
    }
}
var reverseBetween = function(head, left, right) {
    if (left === right) return head;
    let map = new Map(), prev = null, masterHead = head;
    let position = 1;
    while (head) {
        let temp = head;
        map.set(position, new DblNode(prev, head.next, temp))
        prev = head;
        head = head.next;
        position++
    }
    if (map.has(left) && map.has(right)) {
        let node1 = map.get(left), node2 = map.get(right);

        if (node1.node.val === masterHead.val) {
            masterHead = node2.node;
        } else if (node2.node.val === masterHead.val) {
            masterHead = node1.node;
        }

        if (node1.prev) {
            node1.prev.next = node2.node
        }
        if (node1.next && node1.next.val === node2.node.val) {
            node2.node.next = node1.node
        } else {
            node2.node.next = node1.next
        }

        if (node2.prev) {
            node2.prev.next = node1.node
        }
        node1.node.next = node2.next
    }
    return masterHead
};