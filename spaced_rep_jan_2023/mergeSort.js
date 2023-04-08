// Divide & Conquer
// Time: O(n * log(n))
// Space: O(n)
const sortArray = (arr) => {
    if (arr.length <= 1) return arr;
    let m = Math.floor(arr.length/2)
    let left = sortArray(arr.slice(0, m)), right = sortArray(arr.slice(m))
    return mergeSort(left, right)
}
const mergeSort = (arr1, arr2) => {
    let sort = []
    while (arr1.length || arr2.length) {
        let num1 = arr1[0], num2 = arr2[0]
        if (num1 === undefined) {
            sort.push(arr2.shift())
        } else if (num2 === undefined) {
            sort.push(arr1.shift())
        } else if (num1 <= num2) {
            sort.push(arr1.shift())
        } else {
            sort.push(arr2.shift())
        }
    }
    return sort
}
console.log(sortArray([3,2,1,5,3,2])) // =  1, 2, 2, 3, 3, 5 ]
