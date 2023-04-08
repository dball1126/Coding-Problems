var totalHammingDistance = function(nums) {
    let count = 0, result = 0
    for (let i = 0; i < 32; i++) {
        let mask = 1 << i, count = 0
        for (let n of nums) {
            if (n & mask) count++ // how many 1s we have at this bit
        }
        // calculate how many other bits are different (nums.length - count)
        // multiply this difference by the number of nums that have a different 
        // 1 bit. We already know which ones have a 1 bit(count).
        result += ((nums.length - count) * count)
    }
    return result
};

console.log(totalHammingDistance([4,14,4]))