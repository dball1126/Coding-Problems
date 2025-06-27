class Node {
    constructor(val, key) {
        this.next = this.prev = null;
        this.val = val;
        this.key = key
    }
}

var LRUCache = function(capacity) {
    this.head = new Node(), this.tail = new Node()
    this.head.prev = this.tail;
    this.tail.next = this.head;
    this.map = new Map()
    this.size = capacity
};

LRUCache.prototype.get = function(key) {
    let nde = this.map.get(key)
    if (!nde) return -1
    this.addToHead(key)
    return nde.val;
};
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        this.addToHead(key, value)
    } else if (this.map.size < this.size) {
        this.addToHead(key, value)
    } else {
        this.delete()
        this.addToHead(key, value)
    }
};
LRUCache.prototype.addToHead = function(key, value = undefined) { // handles updates and insertion
    let nde = this.map.get(key)
    if (nde) {
        nde.next.prev = nde.prev;
        nde.prev.next = nde.next;
        if (value !== undefined) {
            nde.val = value;
        }
    } else {
        nde = new Node(value, key)
        this.map.set(key, nde)
    }
    let tail = this.head.prev
    tail.next = nde;
    nde.prev = tail;
    nde.next = this.head;
    this.head.prev = nde;
};
LRUCache.prototype.delete = function() { // handles updates and insertion
    let nde = this.tail.next;
    nde.prev.next = nde.next;
    nde.next.prev = nde.prev;
    this.map.delete(nde.key)
    
}
