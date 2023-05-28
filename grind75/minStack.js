class Node {
    constructor(val, min = null) {
        this.val = val; this.min = min; this.next = null; this.prev = null;
    }
}
var MinStack = function() {
    this.head = null; this.tail = null;
};
MinStack.prototype.push = function(val) {
    let node = new Node(val)
    if (!this.head) {
        node.min = val;
        this.head = node; this.tail = node;
    } else {
        this.head.next = node;
        node.prev = this.head;
        node.min = Math.min(val, this.head.min)
        this.head = node;
    }
};

MinStack.prototype.pop = function() {
    if (!this.head) return null;
    let {val, prev} = this.head;
    this.head = prev;
    if (this.head) this.head.next = null;
    return val;
};

MinStack.prototype.top = function() {
    if (!this.head) return null;
    return this.head.val;
};
MinStack.prototype.getMin = function() {
    if (!this.head) return null;
    return this.head.min;
};
