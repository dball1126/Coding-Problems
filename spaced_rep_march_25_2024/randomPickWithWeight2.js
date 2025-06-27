/**
 * @param {number[]} w
 */
var Solution = function(w) {
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
Solution.prototype.pickIndex = function() {
    let tgt = Math.floor(Math.random() * this.sum)

    let l = 0, r = this.prefixSums.length-1
    while (l <= r) {
        let m = Math.floor( (r + l) / 2)
        let tgtSum = this.prefixSums[m]
        if (tgt < tgtSum) {
            return m;
        } else if (tgt >= tgtSum) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
};

const solution = new Solution([1,3])
console.log(solution.pickIndex())