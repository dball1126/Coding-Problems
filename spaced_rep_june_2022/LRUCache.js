/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.max = capacity;
    this.order = new Array();
    this.items = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const item = this.items.get(key)
    if (item === undefined) return -1;

    const idx = this.order.findIndex(k => k === key)
    this.order.splice(idx, 1)
    this.order.unshift(key)

    return item;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (!this.items.has(key) && this.order.length === this.max) {
        const k = this.order.pop();
        this.items.delete(k)
        this.items.set(key, value)
        this.order.unshift(key)
    } else if (!this.items.has(key) && this.order.length < this.max) {
        this.items.set(key, value)
        this.order.unshift(key)
    } else {
        this.items.set(key, value)
        const idx = this.order.findIndex(k => k === key)
        this.order = this.order.splice(idx, 1)
        this.order.unshift(key)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const lru = new LRUCache(2)
lru.put(1,1)
console.log(lru)
lru.put(2,2)
console.log(lru)
console.log(lru.get(1))
console.log(lru)

lru.put(3,3)
console.log(lru)
console.log(lru.get(2))
console.log(lru)

lru.put(4,4)
console.log(lru)

console.log(lru.get(1))
console.log(lru)

console.log(lru.get(3))
console.log(lru)

console.log(lru.get(4))
console.log(lru)