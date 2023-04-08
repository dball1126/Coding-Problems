// Time: O(n), Space: O(1)
const reverseList = (root) => {

    let prev = null;
    
    while (root) {
        let temp = root.next
        root.next = prev
        prev=root
        root = temp
    }
    return prev
}
// 3->2-1  =   1->2->3
