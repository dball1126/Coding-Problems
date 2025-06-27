/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
    let maxCount = 0, n = arr.length
    
    for (let i = 0; i < n-2; i++) {
        let j = i+1, k = n-1

        while (j < k) {
            let v1 = arr[i], v2 = arr[j], v3 = arr[k]
            let sum = v1 + v2 + v3;

            if (sum === target && arr[j] !== arr[k]) {
                let left = 1, right = 1;
                while (j+1 < k && arr[j] === arr[j+1]) {
                    left++
                    j++
                }
                while (j < k-1 && arr[k-1] === arr[k]) {
                    right++
                    k--
                }

                maxCount += (left * right)

                j++; k--
            } else if (sum < target) {
                j++
            } else {
                k--
            }
        }
    }
    return maxCount
};
console.log(threeSumMulti( arr = [1,1,2,2,2,2], target = 5))