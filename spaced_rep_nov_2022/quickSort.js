// Time: O(n * log(n))
// Space: O(log(n))
const sortArray = (nums) => {

    const partition = (arr, left, right) => {
        let pivot = arr[Math.floor((left + right) / 2)]    
        while (left <= right) {
            while (arr[left] < pivot) left++
            while (arr[right] > pivot) right--
            if (left <= right) {
                [arr[left], arr[right]] = [arr[right], arr[left]]
                left++
                right--
            }
        }
        return left
    }

    const quickSort = (arr, left, right) => {
        if (arr.length <= 1) return arr;
        let leftIndex = partition(nums, left, right)
        if (left < leftIndex-1) quickSort(arr, left, leftIndex-1)
        if (leftIndex < right) quickSort(arr, leftIndex, right)
        return arr
    }
    return quickSort(nums, 0, nums.length-1)
}


console.log(sortArray([4,1,5,3,2]))