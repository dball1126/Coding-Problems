class Node {
    constructor(key, val) {
        this.key = key; this.val = val; this.prev = null; this.next = null;}
}
var LRUCache = function(capacity) {
    this.head = new Node(); this.tail = new Node(); this.map = new Map();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.capacity = capacity;
};
LRUCache.prototype.get = function(key) { // O(1)
    if (!this.map.has(key)) return -1;
    let nde = this.map.get(key)
    this.delete(nde.key)
    this.add(nde.key, nde.val)
    return nde.val
};
LRUCache.prototype.put = function(key, value) { // O(1)
    if (this.map.size < this.capacity) {
        this.delete(key)
        this.add(key, value)
    } else if (this.map.has(key) && this.capacity === this.map.size) {
        this.delete(key)
        this.add(key, value)
    } else {
        let head = this.head.next;
        this.delete(head.key)
        this.delete(key)
        this.add(key, value)
    }
};
LRUCache.prototype.add = function(key, value) { // O(1)
    const nde = new Node(key, value);
    const tail = this.tail.prev;
    tail.next = nde;
    nde.prev = tail;
    nde.next = this.tail;
    this.tail.prev = nde;
    this.map.set(key, nde)
}
LRUCache.prototype.delete = function(key, value) { // O(1)
    if (!this.map.has(key)) return;
    const nde = this.map.get(key);
    let prev = nde.prev, next = nde.next;
    prev.next = next;
    next.prev = prev;
    this.map.delete(key)
}

