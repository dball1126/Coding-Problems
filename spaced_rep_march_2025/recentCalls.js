
var RecentCounter = function() {
    this.calls = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.calls.push(t)
    let lo = 0, hi = this.calls.length-1, minSum = t - 3000;

    while (lo < hi) {
        let m = Math.floor((hi + lo) / 2);
        if (m === minSum) {
            lo = m;
            break;
        }
        else if (m < minSum) {
            lo = m + 1
        } else {
            hi = m
        }
    }
    if (this.calls[lo] >= minSum) return this.calls.length - lo
    return this.calls.length - (lo + 1) 
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */