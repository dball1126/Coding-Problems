class Node {
    prev = null
    next = null
    val = null
    key = null
    constructor(key, val) {
        this.val = val
        this.key = key
    }
}



/**
 * @param {number} capacity
 */
 class LRUCache {
    map = new Map()
    size = 0
    head = null
    tail = null
    constructor(size) {
        this.size = size
    }

    insertAtHead(node) {
        node.prev = null
        node.next = null;
        if (!this.head || !this.tail) {
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
    }
 }
    

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key, result = false) {
    let node = this.map.get(key)
    if (!node) return -1
    if (!this.head) {
        this.head = node
        this.tail = node
        if (result) return
        return node.val
    }
    // handle head
    if (this.size === 1 || this.head.key === node.key) return node.val
    // handle tail
    if (this.tail.key === node.key) {
        if (this.tail.prev) this.tail.prev.next = null
        this.tail = this.tail.prev
        this.insertAtHead(node)
        if (result) return

        return node.val
    }

    if (node.prev) node.prev.next = node.next
    if (node.next) node.next.prev = node.prev
    this.insertAtHead(node)
    if (result) return

    return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.map.get(key)
    if (node) {
        node.val = value;
        this.get(key, true)
        return
    }
    node = new Node(key, value)
    
    if (this.map.size < this.size) {
        this.map.set(key, node)
        this.get(key, true)
        return;
    }

    // evict
    this.map.delete(this.tail.key)
    this.map.set(key, node)
    if (this.tail.prev) this.tail.prev.next = null
    this.tail = this.tail.prev
    this.insertAtHead(node)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
 var lRUCache = new LRUCache(2)
 lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache.get(1))    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2))    // return 1
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1))    // return 1
console.log(lRUCache.get(3))    // return 3
console.log(lRUCache.get(4))    // return 3
console.log(lRUCache)




