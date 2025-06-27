

var minAreaRect = function(pts) {
    let adjListX = new Map(), adjListY = new Map(), min = Infinity;

    for (let [x, y] of pts) {
        if (!adjListX.has(x)) adjListX.set(x, new Set())
        if (!adjListY.has(y)) adjListY.set(y, new Set())
        adjListX.get(x).add(y)
        adjListY.get(y).add(x)
    }


    for (let [x, y] of pts) {
        if (adjListX.has(x)) {
            Array.from(adjListX.get(x)).forEach(y2 => {
                if (y2 !== y) {
                    if (adjListY.has(y2) && adjListY.has(y)) {
                        Array.from(adjListY.get(y)).forEach(x3 => {
                            if (x3 !== x && adjListY.get(y2).has(x3)) {
                                // if (x !== y2 && x3 !== y) {
                                    min = Math.min(min, Math.abs(x-x3) * Math.abs(y-y2))

                                // }
                            }
                        })
                    }
                }
            })
        }
    }

    return min === Infinity ? 0 : min
};

console.log(minAreaRect([[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]))