/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(arr) {
    if (arr.length <= 1) return arr;
    let m = Math.floor(arr.length / 2);
    let left = [], right = [];

    for (let el of arr) {
        if (el <= arr[m]) {
            left.push(el)
        } else {
            right.push(el)    
        }
    }
    let leftMerge = sortArray(left), rightMerge = sortArray(right)
    return mergeSort(leftMerge, rightMerge)
};

const mergeSort = (nums1, nums2) => {
    if (nums1.length <= 1 || nums2.length <= 1) return [...nums1, ...nums2];

    let result = [];

    while (left.length || right.length) {
        let l = left[0], right = right[0]

        if (l === undefined || l >= r) {
            result.push(right.shift())
        } else if (r === undefined || l <= r) {
            result.push(left.shift())
        }
    }
    return sortArray(result)
}

console.log(sortArray([3,1,2,4]))