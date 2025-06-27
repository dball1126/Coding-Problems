
 function _Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
 };
 

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    let map = new Map()
    let newHead = null
    let placed = false
    while (head) {
        if (!map.has(head)) {
            map.set(head, new _Node(head.val))
        }
        let curr = map.get(head)
        if (!placed) {
            newHead = curr
            placed = true;
        }

        if (head.random) {
            if (!map.has(head.random)) map.set(head.random, new _Node(head.random.val))
            curr.random = map.get(head.random)
        }

        if (head.next) {
            if (!map.has(head.next)) map.set(head.next, new _Node(head.next.val))
            curr.next = map.get(head.next)
        }
        head = head.next;
    }
    return newHead;
};