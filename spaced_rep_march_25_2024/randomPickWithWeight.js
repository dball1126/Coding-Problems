/**
 * @param {number[]} w
 */
var Solution = function(w) { // time and space: O(n)
    this.prefixSums = []
    let sum = 0;
    for (let s of w) {
        sum += s;
        this.prefixSums.push(sum)
    }
    this.sum = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() { // pick index runs at log n time
    let randomSum = Math.floor(Math.random() * this.sum)

    let l = 0, r = this.prefixSums.length-1

    while (l <= r) { // log(n)
        
        let m = Math.floor((r + l) / 2)
        let currentSum = this.prefixSums[m]
        let offset = 0;
        if (m-1 > 0) {
            offset = this.prefixSums[m-1]
        }
        if (randomSum >= offset && randomSum <= currentSum) {
            return m
        } else if (randomSum > (currentSum - offset)) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
};
var obj = new Solution([1, 3])
console.log(obj.pickIndex())
/**
 * ([1, 3]);
 *   prefixsums = [1, 4]
 *  randomSum = 0
 *   0   1
 *  mid = 1   0 0
 * 
 */
/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */