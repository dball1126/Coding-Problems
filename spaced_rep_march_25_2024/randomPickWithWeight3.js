/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.sum = 0;
    this.prefixSums = []

    for (let weigth of w) {
        this.sum += weigth;
        this.prefixSums.push(this.sum)
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let tgt = Math.floor(Math.random() * this.sum)

    let l = 0, r = this.prefixSums.length -1;

    while (l < r) {
        let m = Math.floor((r + l) / 2)
        let tgtSum = this.prefixSums[m]
        if (tgt > tgtSum) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
    return l
};
const solution = new Solution([1, 3]);
console.log(solution.pickIndex())
/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */