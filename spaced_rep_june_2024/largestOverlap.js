/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {

    let img2Set = new Set(), img1Set = new Set(), max = 0
    for (let r = 0; r < img2.length; r++) {
        for (let c = 0; c < img2[r].length; c++) {
            if (img2[r][c] === 1) {
                let k = r + ":" + c
                img2Set.add(k)
            }
        }
    }
    let curr = 0
    for (let r = 0; r < img1.length; r++) {
        for (let c = 0; c < img1.length; c++) {
            let k = r + ":" + c
            if (img1[r][c] === 1) {
                img1Set.add(k)
                if (img2Set.has(k)) curr++
            }
        }
    }

    max = Math.max(max, curr)
    curr = 0

    // go top down
    let set1Copy = new Set(img1Set)
    for (let r = 0; r < img1.length; r++) {
        for (let c = 0; c < img1.length; c++) {
            let set = new Set()
            for (let v of Array.from(set1Copy)) {
                let [row, col] = v.split(":")
            }
        }
    }
};

