/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let arr = nums.map(a => a + "")
    arr = arr.sort((a, b) => {
        if (a[0] > b[0]) {
            return 1
        } else if (a[0] < b[0]) {
            return -1
        } else {
            let aBig = true
            let i = 0, j = 0

            let v1 = (a + b), v2 = (b + a)
            if (v1 > v2) {
                aBig = true
            } else if (v1 < v2) {
                aBig = false
            } else if (v1 === v2) {
                aBig = false
            }


            if (aBig) { 
                return 1
            } else if (!aBig) {
                return -1
            } else {
                return 0
            }
        }
    })
    let result = ""
    for (let i = arr.length-1; i >= 0; i-- ) {
        result += arr[i]
    }

    if (result[0] === "0") return "0"    
    return result
};
console.log(largestNumber([10,2]))