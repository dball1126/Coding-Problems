 // Linked List
 // Time: O(n)
 // Space: O(1)
 var hasCycle = function(head) {
    let tortise = head, hare = head;
    if (!head) return false;
    if (hare) hare = hare.next;
    while (tortise && hare) {
        if (tortise === hare) return true;
        tortise = tortise.next
        hare = hare.next
        if (hare) hare = hare.next;
    }
    return false;
};