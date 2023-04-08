var reverseList = function(head) {
    let prev = null
    while (head) {
        let temp = head.next;
        if (!temp) {
            head.next = prev;
            return head;
        }
        if (!prev) {
            prev = head;
            prev.next = null;
        } else {
            head.next = prev;
            prev = head;
        }
        head = temp;
    } 
    return prev;   
};