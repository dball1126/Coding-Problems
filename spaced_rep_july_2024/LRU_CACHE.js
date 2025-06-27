
class Node { 
    constructor(key, val) {
        this.key = key; this.val = val; this.next = null; this.prev = null;
    }
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.tail = new Node()
    this.head = new Node()
    this.tail.next = this.head;
    this.head.prev = this.tail;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1
    let node = this.map.get(key)

    let next = node.next;
    let prev = node.prev;
    prev.next = next;
    next.prev = prev;
    this.add(node)

    return node.val;
};

LRUCache.prototype.add = function(node) {
    let head = this.head.prev;
    node.next = this.head;
    this.head.prev = node;
    node.prev = head;
    head.next = node;

};

LRUCache.prototype.evict = function() {
    if (!this.capacity) return;
    let tail = this.tail.next;
    tail.next.prev = this.tail;
    this.tail.next = tail.next;
    this.map.delete(tail.key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.map.get(key)

    if (node) {
        let next = node.next;
        let prev = node.prev;
        prev.next = next;
        next.prev = prev;
        node.val = value;
        this.add(node)    
    } else if (this.capacity === this.map.size) {
        this.evict();
        node = new Node(key, value)
        this.map.set(key, node)
        this.add(node)
    } else {
        node = new Node(key, value)
        this.map.set(key, node)
        this.add(node)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */