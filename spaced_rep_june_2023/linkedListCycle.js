

var hasCycle = function(head) {
    if (!head || !head.next) return false;

    let p1 = head, p2 = head.next;
    
    while (!p1 && !p2) {
        if (p1.val === p2.val) return true;

        p2 = p2.next;
        if (p2 && p2.val === p1.val) return true;
        p1 = p1.next; p2 = p2.next;
    }
    return false;
};