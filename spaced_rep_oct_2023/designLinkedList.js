class Node {
    constructor(val, next) {
        this.val = val; this.next = next;
    }
}
var MyLinkedList = function() {
    this.head = this.tail = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (!this.head) return -1
    let curr = this.head
    let idx = 0
    while (curr && idx !== index) {
        curr = curr.next;
        idx++
    }
    if (!curr || idx !== index) return -1;
    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val, this.head)
    this.head = node;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new Node(val, null)
    if (this.tail) {
        this.tail.next = node
    } else {
        this.tail = node;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0 && this.head) {
        const nde = new Node(val, this.head)
        this.head = nde;        
        return
    }

    let curr = this.head, idx = 0

    while (curr && idx+1 !== index) {
        curr = curr.next;
        idx++
    }
    if (curr && idx+1 === index) {
        const nde = new Node(val, curr.next)
        curr.next = nde
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (!this.head) return
    if (index === 0) return this.head = this.head.next
    let curr = this.head, idx = 0

    while (curr && idx+1 !== index) {
        curr = curr.next;
        idx++
    }
    if (curr && idx+1 === index) {
        if (curr.next) {
            curr.next = curr.next.next
        } else {
            curr.next = null;
        }
    }
};

