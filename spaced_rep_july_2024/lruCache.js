class Node {
    constructor(k = null, v = null) {
        this.next = null; this.prev = null; this.val =v;
        this.key = k
    }
}
var LRUCache = function(capacity) {
    this.head = new Node();
    this.tail = new Node();
    this.head.prev = this.tail;
    this.tail.next = this.head;
    this.size = capacity;
    this.map = new Map();


};
LRUCache.prototype.addToHead = function(nde)  {
    let prev = nde.prev, next = nde.next
    if (prev) prev.next = next;
    if (next) next.prev = prev;

    let temp = this.head.prev;
    this.head.prev = nde;
    nde.next = this.head;
    nde.prev = temp;
    temp.next = nde;
}

LRUCache.prototype.removeTail =function() {
    let tail = this.tail.prev;
    let prev = tail.prev, next = tail.next;
    prev.next = next;
    next.prev = prev;
    this.map.delete(tail.key)
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.map.get(key)
    if (!node) return -1
    this.addToHead(node)
    return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.map.get(key)
    if (node) { // update
        node.val = value;
        this.addToHead(node)
    } else if (this.size === this.map.size) { // evict
        this.removeTail()
        node = new Node(key, value)
        this.map.set(key, node)
        this.addToHead(node)
    } else { // insert
        node = new Node(key, value)
        this.addToHead(node)
        this.map.set(key, node)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */