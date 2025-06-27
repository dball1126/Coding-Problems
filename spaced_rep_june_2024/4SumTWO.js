/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let sums = new Map(), count = 0
    
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let sum = nums1[i] + nums2[j]
            if (!sums.has(sum)) sums.set(sum, 0)
            sums.set(sum, sums.get(sum) + 1)
        }
    }

    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            let sum = nums3[i] + nums4[j]
            if (sum === 0 && sums.has(sum)) {
                count += sums.get(sum)
            } else if (sum < 0 && sums.has(sum * 1)) {
                count += sums.get(sum * 1)
            } else if (sums.has(-sum)) {
                count += sums.get(-sum)
            }
        }
    }
    return count;
};
console.log(fourSumCount( nums1 = [0,1,-1], nums2 = [-1,1,0], nums3 = [0,0,1], nums4 = [-1,1,1]))