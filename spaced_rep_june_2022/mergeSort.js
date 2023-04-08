const merge = (a1, a2) => {
    let newArr = [];
    while (a1.length || a2.length) {
        let v1 = a1.length ? a1[0] : Infinity
        let v2 = a2.length ? a2[0] : Infinity
        if (v1 < v2) {
            newArr.push(a1.shift())
        } else {
            newArr.push(a2.shift())
        }
    }
    return newArr
}

const mergeSort = (a) => {
    if (a.length <= 1) return a;
    let m = Math.floor(a.length / 2);
    let left = mergeSort(a.slice(0, m)) 
    let right = mergeSort(a.slice(m))
    return merge(left, right)
}

console.log(mergeSort([7,0,4,3,2,6,89,4,2,4,2]))