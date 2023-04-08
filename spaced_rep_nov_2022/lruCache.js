class Node {
    key = null; val = null; prev = null; next = null;
    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

LRUCache.prototype.get = function(key) {
    let node = this.cache.get(key)
    if (!node) return -1;

    let prev = node.prev, next = node.next;

    if (prev) prev.next = next;
    if (next) next.prev = prev;
    if (this.tail.key === key) {
        this.tail = prev;
    }

    if (this.head.key !== node.key) this.insertAtHead(node)
};


LRUCache.prototype.put = function(key, value) {
    
};

LRUCache.prototype.insertAtHead = function(node) {
    if (!this.cache.has(node.key)) this.cache.set(node.key, node)

    node.prev = null;
    node.next = null;
    
    this.head.prev = node
    node.next = this.head;

    this.head = node;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */