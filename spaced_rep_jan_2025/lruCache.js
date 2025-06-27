
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.head = new Node();
    this.tail = new Node();
    this.head.prev = this.tail;
    this.tail.next = this.next;
    this.map = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;
    return this.updateNode(key);
};
LRUCache.prototype.evict = function() {
    let node = this.tail.next
    let prev = node.prev
    let next = node.next;
    prev.next = next;
    next.prev = prev;
    this.map.delete(node.val) 
}
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (!this.map.has(key)) {
        if (this.map.size === this.capacity) {
            this.evict();
        }
        let node = new Node(value);
        this.map.set(key, node);
        this.insertAtHead(node);
    } else {
        let node = this.map.get(key);
        node.val = value;
        this.updateNode(key)
    }
};
LRUCache.prototype.insertAtHead = function(node) {
    let prev = this.head.prev;
    prev.next = node;
    node.next = this.head;
    node.prev = prev;
    this.head.prev = node;
}
LRUCache.prototype.updateNode = function(key) {
    let node = this.map.get(key);
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
    this.insertAtHead(node);
    return node.val;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */