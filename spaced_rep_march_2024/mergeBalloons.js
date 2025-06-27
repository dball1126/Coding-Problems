
const mergeBalloons = (arr) => {
    let x1 = undefined, x2 = undefined, result = []

    arr.sort((a,b) =>  a[1] - b[1])
console.log(arr)
    for (let [x, y] of arr) {
        if (x1 === undefined) {
            x1 = x; x2 = y;
        } else if (x >= x1 && x <= x2) { // overallping
            // do nothing
            let test = ''
        } else { //non-ovelapping
            result.push([x1,x2])
            x1 = x; x2 = y;
        }
    }

    if (x1 !== undefined) {
        result.push([x1, x2])
    }

    return result.length
}

// 
console.log(mergeBalloons([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6]]))


/**
 * 
 
[
  [ 0, 9 ],  [ 0, 6 ], [ 2, 9 ],  [ 3, 9 ], [ 3, 8 ],  [ 3, 9 ], [ 6, 8 ],  [ 7, 12 ], [ 9, 10 ]
]


 */