/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.prefixSums = []
    this.sum = 0
    for (let i = 0; i < w.length; i++) {
        this.sum += w[i]
        this.prefixSums.push(this.sum)
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let random = Math.ceil(Math.random() * this.sum)

    let l = 0, r = this.prefixSums.length-1

    while (l < r) {
        let m = Math.floor((r + l) / 2)

        if (random === this.prefixSums[m]) {
            return m;
        } else if (random > this.prefixSums[m]) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
    return l
};
    var obj = new Solution([1, 3])
    console.log(obj.pickIndex())
/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */