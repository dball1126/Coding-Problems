class Node {
    constructor(val, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

var RandomizedSet = function() {
    let randomMap = new Map();
    let head = null;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.randomMap.has(val)) {
        this.randomMap.set(val, this.randomMap.size + 1)
        if (!head) head = new Node(val)
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.randomMap.has(val)) {
        return false;
    }
    this.randomMap.delete(val)
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return Math.floor(Math.random(this.randomMap.size))
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */