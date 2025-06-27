/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.nums = []
};

/** 
 * @param {number} val
 * @return {number}
 */
// Prefix sums
 // Time: O(1)
 // Space: O(n)
MovingAverage.prototype.next = function(val) {
    this.nums.push(val)
    const n = this.nums.length
    if (n > 1) {
        this.nums[n-1] += this.nums[n-2]
    }

    if (n > this.size) { // use prefix sum
        let sumE = this.nums[n-1]
        let sumB = this.nums[n - this.size - 1]
        sumE -= sumB

        return sumE / this.size
    } else {
        return this.nums[n-1] / n
    }
};


/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */