/**
 * @param {number[]} w
 */
var Solution = function(w) {
   this.prefixSum = [...new Array(w)].fill(0)
   let sum = 0
   w.forEach((v, i) => {
    sum += v
    this.prefixSum[i] = sum
   }) 
   this.sum = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {

    let val = Math.floor(Math.random(this.sum) * this.sum) + 1
    for (let i = 0; i < this.prefixSum.length; i++) {
        let curr = this.prefixSum[i]
        if (val <= curr) return i;
    }

};

/** 
 * Your Solution object will be instantiated and called as such:
 * 
 */
var obj = new Solution([1,3])
 var param_1 = obj.pickIndex()

 console.log(param_1)