class Node {
    constructor(r, c, horiz = false) {
        this.r = r; this.c = c; this.horiz = horiz;
    }
}

var searchMatrix = function(matrix, target) {
    let n = matrix.length, m = matrix[0].length
    const queue = [new Node(0, m-1, true), new Node(0, n-1)]
    const rowVisited = new Set([0]);
    const colVisited = new Set([0]);

    while (queue.length) {
        
        const bsearch = (s , e, horizontal) => {
            let s = node.r, 
            if (s > e) return false;
            if (s === e && matrix[s] === target) return true
            while (s <= e) {
                let m = Math.min((e + s) / 2)
                if (matrix[m] === target) {
                    return true;
                } else if (matrix[m] > target) {
                    e = m-1
                } else {
                    s = m+1
                }

            }
        }
    }

};