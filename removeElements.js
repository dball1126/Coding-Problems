// Time: O(n), Space: O(1)
var removeElements = function(head, val) {
    while (head && head.val === val) {
        head = head.next
    }
    if (!head) return null
    let curr = head, prev = null
    while (curr.next) {
        if (curr.val === val) {
            prev.next = curr.next
        } else {
            prev = curr
        }
        curr = curr.next
    }
    if (curr.val === val) prev.next = null
    return head
};
