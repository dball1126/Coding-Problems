
var RandomizedSet = function() {
    this.map = new Map();
    this.order = []
};
RandomizedSet.prototype.insert = function(val) {
    if (!this.map.has(val)) {
        let idx = this.order.length;
        this.map.set(val, idx)
        this.order.push(val)
        return true;
    } else {
        return false;
    }
};
RandomizedSet.prototype.remove = function(val) {
    if (this.map.has(val)) {
        let idx = this.map.get(val)
        let len = this.order.length-1
        if (this.order.length && len !== idx) {
            let secondVal = this.order[len]
            this.map.set(secondVal, idx)
            let temp1 = this.order[len]
            let temp2 = this.order[idx]
            this.order[idx] = temp1;
            this.order[len] = temp2
        }
        this.order.pop()
        this.map.delete(val)
        return true;
    } else {
        return false;
    }
};
RandomizedSet.prototype.getRandom = function() {
    let len = this.order.length;
    return this.order[Math.floor(Math.random() * len)]
};


const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1));
console.log(randomizedSet.remove(2));
console.log(randomizedSet.insert(2)); 
console.log(randomizedSet.getRandom())
console.log(randomizedSet.remove(1))
console.log(randomizedSet.insert(2))
console.log(randomizedSet.getRandom())


