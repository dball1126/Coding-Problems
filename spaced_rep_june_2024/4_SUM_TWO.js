/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let sums = 0, pairs = new Map()
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let sum = nums1[i] + nums2[j]
            if (!pairs.has(sum)) pairs.set(sum, 0)
            pairs.set(sum, pairs.get(sum) + 1)
        }   
    }

    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            let sum = nums3[i] + nums4[j]
            if (pairs.has(-sum)) {
                sums += pairs.get(-sum)
            }
        }   
    }
    return sums
};
console.log(fourSumCount(nums1 = [-1,-1], nums2 = [-1,1], nums3 = [-1,1], nums4 = [1,-1]))