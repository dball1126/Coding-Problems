var DetectSquares = function() {
    this.points = new Map();
    this.sqCount = new Map()
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
    let [x, y] = point, key = x + "" + y
    this.points.add(key, [x,y])
    if (!this.sqCount.has(key)) this.sqCount.set(key, 0)
    this.sqCount.set(key, this.sqCount.get(key) + 1)
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
    if (this.points.length < 3) return null;
    let count = 0
    let [x1, y1] = point;
    for (let i = 0; i < points.length-2; i++) {
        for (let j = i+1; j < points.length-1; j++) {
            for (let k = i+2; k < points.length; k++) {
                let temp = new Set()
                let [i1, i2] = points[i], [j1, j2] = points[j], [k1, k2] = points[k]
                let key1 = i1+""+i2, key2 = j1+""+j2, key3 = k1+""+k2, key = x1+""+y1
                temp.add(key)
                if(temp.has(key1))continue;
                if(temp.has(key2))continue;
                if(temp.has(key3))continue;
                
                let temps = [x1+""+y1, pointers[i]+""]
            }
        }
    }
};