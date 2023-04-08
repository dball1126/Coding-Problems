/**
 * Time: O(n * log(n))
 * Space: O(n)
 */

const merge = (a, b) => {
    let arr = []
    while (a.length || b.length) {
        if (!a.length) {
            arr.push(b.shift())
        } else if (!b.length) {
            arr.push(a.shift())
        } else {
            if (a[0] <= b[0]) {
                arr.push(a.shift())
            } else {
                arr.push(b.shift())
            }
        }
    }
    return arr;

}

const sortArray = (a) => {
    if (a.length <= 1) return a;
    let m = Math.floor(a.length / 2);
    let left = sortArray(a.slice(0, m))
    let right = sortArray(a.slice(m))
    return merge(left, right)
}

console.log(mergeSort([3,1,2,4,7,6]))