class Node {
    constructor(val) {
        this.val = val; this.prev = null; this.next = null;
    }
}
class DbLLinkedList {
    constructor() {
        this.head = new Node()
        this.tail = new Node()
        this.head.prev = this.tail;
        this.tail.next = this.head;
    }
    insertAtHead(nde) {
        nde.next = this.head;
        nde.prev = this.head.prev;
        this.head.prev = nde;
        nde.prev.next = nde;
    }
    removeNode(nde) {
        let next = nde.next, prev = nde.prev;
        next.prev = prev;
        prev.next = next;
    }
    insert(nde) {
        nde.next = this.tail.next;
        nde.prev = this.tail
        this.tail.next = nde;
    }
}

var MinStack = function() {
    this.map = new Map();
    this.list = new DbLLinkedList();
    this.min = null;
    this.order = []
};

MinStack.prototype.push = function(val) {
    let node = new Node(val)
    if ((this.min && val < this.min.val) || !this.min) {
        this.list.insertAtHead(node)
        this.min = node;
    } else {
        this.list.insert(node)
    }
    this.order.push(node)
};

MinStack.prototype.pop = function() {
    if (!this.order.length) return null;
    let nde = this.order.pop();
    this.list.removeNode(nde)
    if (this.order.length) {
        this.min = this.list.head.prev
    } else {
        this.min = null;
    }
    return nde.val;
};

MinStack.prototype.top = function() {
    if (!this.order.length) return null;
    let nde = this.order[this.order.length-1]
    return nde.val;
};

MinStack.prototype.getMin = function() {
    if (!this.order.length) return null;
    return this.min.val;
};


// Your MinStack object will be instantiated and called as such:
var obj = new MinStack()
const val = 2,  val2 = 0,val3 = 3, val4 = 0
obj.push(val)
obj.push(val2)
obj.push(val3)
obj.push(val4)

console.log(obj.getMin())
obj.pop()
console.log(obj.getMin())
obj.pop()
console.log(obj.getMin())
obj.pop()
console.log(obj.getMin())
// console.log("one ***************")
// console.log(obj)
// obj.pop()
// console.log("two ***************")
// console.log(obj)


// var param_3 = obj.top()
// console.log("three ***************")

// var param_4 = obj.getMin()
// console.log("four ***************")

