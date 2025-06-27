/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
    let maxCount = 0, n = arr.length;
    arr.sort((a,b) => a - b)

    for (let i = 0; i < n-2; i++) {
        let j = i+1, k = n-1
        while (j < k) {
            let v1 = arr[i], v2 = arr[j], v3 = arr[k]
            let sum = v1+v2+v3
            if (sum === target) {
                maxCount++
                while(arr[j] === arr[j+1] && j+1 !== k){
                    j++; maxCount++
                }
                while(j !== k-1 && arr[k] === arr[k-1]) {
                    k--; maxCount++
                }
                j++;
            } else if (sum > target) {
                k--
            } else {
                j++
            }
        }
    }
    return maxCount;
};
console.log(threeSumMulti([1,1,2,2,2,2], target = 5))