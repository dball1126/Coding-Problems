/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()

    nums.forEach(v => {
        if (!map.has(v)) map.set(v, 0)
        map.set(v, map.get(v) + 1)
    })
    let arr = Array.from(map)
    arr.sort((a,b) => b[1] - a[1])
    let freq = [], i = 0;
    while (i < k && i < arr.length) {
        freq.push(arr[i][0])
        i++;
    }
    return freq
};
console.log(topKFrequent([1,1,1,2,2,3],2))