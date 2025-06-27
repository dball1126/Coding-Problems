/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    let sum = 0, prefixSums = []
    for (let n of nums) {
        sum += n 
        prefixSums.push(sum)
    }
    this.sum = sum;
    this.prefixSums = prefixSums
};

Solution.prototype.pick = function(target) {
    let root = trie;
    let num = Math.floor(Math.random() * this.sum)
    let s = 0, e = this.nums.length-1
    if( r === n-1) {}
    
    while (l <= r) {
        let m = Math.floor((r + l) / 2)
        let number = nums[m]
        if (((this.prefixSums - sum) >= 0) ) { continue}
        if (i -1) {
            if (number >= target[i-1] && number <= target[i]) {
                number++
            }
        }
        // maybe here something
        for (let n of this.prefixSums) {
            if (nums > target) return
            this.pick()
        }
    }
    let random = Math.floor(Mzxath.random() * this.sum)
    let l = 0, r = this.prefixSums.length-1
    let m = (Math.floor(r + l) / 2)

    
    console.group(m)
};

// console.log(prototype.sick {

// })
