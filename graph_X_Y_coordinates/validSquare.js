var validSquare = function(p1, p2, p3, p4) {
    const points = [p1, p2, p3, p4]
    let distances = new Set()
    let coorMap = new Map()
    for (let i = 0; i < points.length; i++) {
        let [x1, y1] = points[i]
        for (let j = 0; j < points.length; j++) {
            let [x2, y2] = points[j]
            if (i === j) continue
            if (x1 === x2 && y1 === y2) return false;
            if( coorMap.has(x1+""+x2+""+y1+""+y2)) return false
            coorMap.set(x1+""+x2+""+y1+""+y2)
                let manhattanDistance = (x1 - x2) + (y1 - y2)
                

                distances.add((+manhattanDistance))
        }
    };
    return distances.size <=2
}

console.log(validSquare([0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]))