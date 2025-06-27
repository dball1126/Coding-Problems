class Node {
    constructor(val = undefined, key = undefined) {
        this.val = val;
        this.key = key;
        this.next = undefined;
        this.prev = undefined;
    }
}
var LRUCache = function(capacity) {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail
    this.tail.prev = this.head
    this.capacity = capacity;
    this.map = new Map()
};

LRUCache.prototype.addToHead = function(key, val) {

}

LRUCache.prototype.updateNode = function(key, val) {
    let node = this.map.get(key)
    node.val = val;
    node.prev.next = node.next;
    node.next.prev = node.prev;

    let tail = this.tail.prev;
    this.tail.prev = node;
    tail.next = node;
    node.next = this.tail
    node.prev = tail;
}

LRUCache.prototype.addToTail = function(key, val) {
    let node = new Node(val, key)
    this.map.set(key, node)
    let tail = this.tail.prev;
    this.tail.prev = node;
    tail.next = node;
    node.next = this.tail
    node.prev = tail;
}

LRUCache.prototype.deleteFromHead = function() {
    let node = this.head.next;
    this.head.next = node.next;
    node.next.prev = this.head;
    this.map.delete(node.key);
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1

    let node = this.map.get(key)

    this.updateNode(key, node.val)

    return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.size < this.capacity) {
        this.addToTail(key, value)
    } else if (!this.map.has(key)) {
        this.deleteFromHead()
        this.addToTail(key, value)
    } else {
        this.updateNode(key, value)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


class ListNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.dic = new Map();
        this.head = new ListNode(-1, -1);
        this.tail = new ListNode(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key) {
        if (!this.dic.has(key)) {
            return -1;
        }

        const node = this.dic.get(key);
        this.remove(node);
        this.add(node);
        return node.val;
    }

    put(key, value) {
        if (this.dic.has(key)) {
            const oldNode = this.dic.get(key);
            this.remove(oldNode);
        }

        const node = new ListNode(key, value);
        this.dic.set(key, node);
        this.add(node);

        if (this.dic.size > this.capacity) {
            const nodeToDelete = this.head.next;
            this.remove(nodeToDelete);
            this.dic.delete(nodeToDelete.key);
        }
    }

    add(node) {
        const previousEnd = this.tail.prev;
        previousEnd.next = node;
        node.prev = previousEnd;
        node.next = this.tail;
        this.tail.prev = node;
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
}