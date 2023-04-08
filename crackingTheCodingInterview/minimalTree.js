class Node {
    val;
    left = null
    right = null;
    constructor(val) {
        this.val = val;
    }
}

const order = (arr) => {
    if (!arr.length) return null;

    const build = (i, j) => {
        if (i > j) return null;
        if (i === j) return new Node(arr[i])

        let m = Math.floor((j - i) / 2) + i;
        let n = new Node(arr[m])
        n.left = build(i, m-1)
        n.right = build(m+1, j)
        return n;
    }
    return build(0, arr.length-1)
}

console.log(order([1,2,3,4,5,6,7,8]))
