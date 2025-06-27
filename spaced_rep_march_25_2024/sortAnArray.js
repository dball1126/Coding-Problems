
const sortAnArray = (nums) => {
    if (nums.length <= 1) return nums;
    
    let mid = Math.floor(nums.length /2)
    let leftArr = sortAnArray(nums.slice(0, mid)), rightArr = sortAnArray(nums.slice(mid))

    return merge(leftArr, rightArr)
}

const merge = (arr1, arr2) => {
  
    let newArr = []

    while (arr1.length || arr2.length) {
        
        if (!arr1.length) {
            newArr.push(arr2.shift())
        } else if (!arr2.length) {
            newArr.push(arr1.shift())
        } else if (arr1[0] <= arr2[0]) {
            newArr.push(arr1.shift())
        } else {
            newArr.push(arr2.shift())
        }
    }
    return newArr
}

console.log(sortAnArray([1,6,7,2,3]))