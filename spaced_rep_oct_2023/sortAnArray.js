/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(arr) {
    let n = arr.length

    const quickSort = (s, e) => {
        let m = Math.floor((e-s) / 2)
        let v = arr[m]
        while (s <= e) {
            while (arr[s] <= v) s++
            while (arr[e] > v) e--
            if (s > e) return -1
    
            if (s <= e) {
                [arr[s], arr[e]] = [arr[e], arr[s]]
                s++; e--
            }
        }
        return s
    }

    const doQuickSort = (l, r) => {
        if (l >= r) return;
        let partition = l;
        while (partition === l) {
             partition = quickSort(l, r)
        }
        if (partition === -1) return;

        if (partition >= s && partition < n) {
            sortArray(nums)
        }
    }
    doQuickSort(0, n-1)
    return arr
};

console.log(sortArray([3,2,1,0]))