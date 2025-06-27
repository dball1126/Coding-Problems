/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.queue = []
    this.sum = 0;
    this.count = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
      this.sum += val
    if (this.queue.length < this.size) {
      this.queue.push(val)
      this.count++;
    } else {
        let removal = this.queue.shift()
        this.sum -= removal
    } 
    return this.sum / this.count
};
