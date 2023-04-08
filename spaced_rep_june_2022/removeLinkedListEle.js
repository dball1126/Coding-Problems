var removeElements = function(head, val) {
    let prev;
    let curr = head;
    while (curr) {
        let temp = curr.next
        if (curr.val === val) {
            if (prev) {
                prev.next = temp;
            }

        }
        curr = curr.next;
        prev = temp
    }
    return head;
};