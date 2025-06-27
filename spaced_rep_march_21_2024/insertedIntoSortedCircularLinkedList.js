
// Definition for a Node.
function Node(val, next) {
    this.val = val;
    this.next = next;
};


/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    const nde = Node(insertVal)
    if (!head) return nde
    let map = new Map(), minNodeIdx, order = [], curr = head;
    let idx = 0;
    while (curr) { // find min node and create map of indexes, O(n) traversal
        if (map.has(curr)) break;
        if (minNodeIdx === undefined) {
            minNodeIdx = idx
        } else {
            const minNode = map.get(minNodeIdx)
            if (curr.val < minNode.val) minNodeIdx = idx;
        }
        map.set(curr, idx)
        order.push(curr)
        idx++
    }



};