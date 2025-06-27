const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let left = [], right = [], n = arr.length, m = Math.floor(arr.length/2)
    for (let i = 0; i < arr.length; i++) {
        const v = arr[i];
        if (i < m) {
            left.push(v)
        } else { right.push(v)}    
    }
    let nums1 = mergeSort(left), nums2 = mergeSort(right)
    return merge(nums1, nums2)
}
const merge = (arr1, arr2) => {
    let result = []
    while (arr1.length || arr2.length) {
        let v1 = arr1[0], v2 = arr2[0]

        if (v1 === undefined) {
            result.push(arr2.shift())
        } else if (v2 === undefined) {
            result.push(arr1.shift())
        } else if (v1 <= v2) {
            result.push(arr1.shift())
        } else {
            result.push(arr2.shift())
        }
    }
    return result
}
console.log(mergeSort([93,2,4,5]))//=[ 2, 4, 5, 93 ]