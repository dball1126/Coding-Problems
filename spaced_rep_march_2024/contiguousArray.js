// Prefix sums


/**
 * @param {number[]} nums
 * @return {number}
 */
// Prefix sums
// Dynamic Programming
// Time and Space: O(n)
var findMaxLength = function(nums) {
    
    const n = nums.length;
    const zArr = [...new Array(n)].fill(0)
    const oArr = [...new Array(n)].fill(0)

    for (let i = 0; i < n; i++) {
        let v = nums[i]
        if (v === 0) {
            zArr[i] = 1
        } else {
            oArr[i] = 1
        }
        if (i-1 >= 0) {
            zArr[i] += zArr[i-1]
            oArr[i] += oArr[i-1]
        }
    }

    const zeros = new Map();
    const ones = new Map();
    let max = -Infinity
    let z = 0, o =0

    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        v === 0  ? z++ : o++
        
        if (z === o) {
            max = Math.max(max, z + o)
        } else if (z > o && zeros.has(z - o)) {
            let zOffset = zArr[zeros.get(z - o)]
            let oOffset = oArr[zeros.get(z - o)]
            if (z - zOffset === o - oOffset) {
                max = Math.max(max, z - zOffset + o - oOffset)
            }
        } else if (o > z && ones.has(o - z)) {
            let zOffset = zArr[ones.has(o - z)]
            let oOffset = oArr[ones.has(o - z)]
            if (z - zOffset === o - oOffset) {
                max = Math.max(max, z - zOffset + o - oOffset)
            }
        }
    
        if (v === 0) {

            zeros.set(z, i)
    
      
        } else {

            ones.set(o, i)
        
  
        }
    }


    return max === -Infinity ? 0 : max
};
console.log(findMaxLength( [0,1,1,0,1,1,1,0]))