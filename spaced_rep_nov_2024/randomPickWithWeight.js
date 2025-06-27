/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.sum = 0;
    this.prefixSums = [];

    for (let weight of w) {
        this.sum += weight;
        this.prefixSums.push(this.sum)
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let weight = Math.ceil(Math.random() * this.sum)
    let low = 0, high = this.prefixSums.length-1

    while (low < high) {
        let m = Math.floor((high + low)  / 2) ;

        if (weight > this.prefixSums[m]) {
            low = m + 1
        } else {
            high = m
        }
    }
    return low
};
