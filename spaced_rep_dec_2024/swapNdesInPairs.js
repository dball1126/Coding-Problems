
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// Linked List Traversal
// Time and Space: O(n)
var swapPairs = function(head) {
    let sentinel = new ListNode()
    let prev = sentinel;

    while (head && head.next) {
        let next = head.next.next;
        let first = head;
        let second = head.next;
        prev.next = second;
        second.next = first;
        first.next = next;
        prev = first;
        head = next;
    }
    return sentinel.next;
};

