/**
 * Time: O(n)
 * Space: O(1)
 */
var reverseList = function(head) {
    let curr = head, prev = null
    while ( curr) {
        let temp = curr.next;
        if (!prev) {
            prev = curr
            prev.next = null
        } else {
            curr.next = prev
            prev = curr
        }
        curr = temp
    }
    return prev
};