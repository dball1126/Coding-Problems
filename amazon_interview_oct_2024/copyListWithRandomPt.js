 function _Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
 };
 

/**
 * @param {_Node} head
 * @return {_Node}
 */
// Hash Map & Linked List Traversal
// Time and Space: O(n)
var copyRandomList = function(head) {
    let mapObj = new Map(), mapIdx = new Map(), curr = head;
    let newHead = null, idx = 0

    while (curr) { // preprocessing
        mapObj.set(curr, idx)
        let newNode = new Node(curr.val)
        mapIdx.set(idx, newNode)
        idx++
        curr = curr.next;
    }
    idx = 0;
    while (head) {
        let node = mapIdx.get(idx)
        if (!newHead) newHead = node;
        if (mapIdx.has(idx+1)) {
            node.next = mapIdx.get(idx+1)
        }
        if (head.random) {
            let i = mapObj.get(head.random)
            node.random = mapIdx.get(i)
        }
        idx++
        head = head.next;
    }
    return newHead
};
