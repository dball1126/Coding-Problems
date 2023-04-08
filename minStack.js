/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.stack.length === 0) return this.stack.push(val);
    if (this.stack.length === 1) {
        if (this.stack[0] > val) {
            return  this.stack.unshift(val)
        } else {
            return this.stack.push(val)
        }
    }

    for (let i = 0; i < this.stack.length; i++) {
        if (this.stack[i-1] === undefined || this.stack[i-1] < val && 
            this.stack[i+1] === undefined || this.stack[i+1] > val) {
                this.stack.splice(i, 0, val)
                break;
            }
    }
    return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // const num = this[this.length-1]
    // this = this.slice(0, this.length-1)
    
    // return num;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this[this.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this[0]
};



const minStack = new MinStack();


// minStack.prototype.push.call(3)

minStack.push(9)
minStack.push(11)
minStack.push(8)
console.log(minStack)