// time O(n)
// space O(log(n))

const quickSort = (a) => {
    if (!a || a.length <= 1) return a;
    let p = a[0]
    let [left, right, mid] = [[],[],[]]

    for (let i = 0; i < a.length; i++) {
        const v = a[i];
        if (v < p) {
            left.push(v)
        } else if (v > p) {
            right.push(v)
        } else {
            mid.push(v)
        }
    }

    let leftArr = quickSort(left)
    let rightArr = quickSort(right)
    return [...leftArr, ...mid, ...rightArr]
}

console.log(quickSort([8,8,3,4,5,1,2,3,1,6,8,4]))