//Time: O(n), Space: O(1) (In place)
var reverseList = function(head) {
    let prev = null;
    while (head) {
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
};