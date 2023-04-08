class Node {
    prev = null
    next = null
    val = null
    constructor(val) {this.val = val}
}

class MyLinkedList {
    head = null
    tail = null
    order = []
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let node = this.order[index]
    if (!node) return -1;
    return node.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val);
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }
    this.order.unshift(node)
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new Node(val);
    if (!this.tail) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        node.prev = this.tail
        this.tail = node;
    }
    this.order.push(node)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.order.length) return;

    let node = new Node(val);
    if (index === 0) {
        return this.addAtHead(val)
    }
    else if (index === this.order.length) {
        return this.addAtTail(val)
    } else {
        let currNode = this.order[index]
        let temp = currNode.prev;
        currNode.prev = node;
        node.prev = temp;
        if (temp) temp.next = node
        node.next = currNode
        this.order.splice(index, 0, node)
    }
    this.head = this.order[0]
    this.tail = this.order[this.order.length-1]
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let node = this.order[index]
    if (!node ) return;
    if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.shift.shift();
    }  else {
        if(node.prev) {
            node.prev.next = node.next
        }
        if (node.next) {
            node.next.prev = node.prev
        }
        this.order.splice(index, 1)
        this.head = this.order[0]
        this.tail = this.order[this.order.length-1]
    }
};
  
  var obj = new MyLinkedList()

//   obj.addAtHead(1)
//   console.log(obj)
//   obj.addAtTail(3)
//   console.log(obj)

  obj.addAtIndex(0,10)
  obj.addAtIndex(0,20)
  obj.addAtIndex(1,30)
//   console.log(obj)
  console.log(obj.get(0))

//   obj.deleteAtIndex(0)

//   console.log(obj.get(1))
  console.log(obj)

