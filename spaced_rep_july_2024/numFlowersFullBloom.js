/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    
    flowers.sort((a, b) => a[0] -b[0])

    let result = []
    console.log(flowers)
    for (let i = 0; i < people.length; i++) {
        let p = people[i]
        
        let s = 0, e = flowers.length-1
        let left = Infinity, right = -Infinity;
        while (s <= e) { // get left bounds
            let m = Math.floor((e + s) / 2)

            let [low, high] = flowers[m]

            if (p >= low && p <= high) {
                left = Math.min(left, m)
            }
            if (low >= p && p <= high) {
                e = m -1
            } else {
                s = m + 1
            }
        }

        s = 0,  e = flowers.length-1
        while (s <= e) { // get right bounds
            let m = Math.floor((e + s) / 2)

            let [low, high] = flowers[m]

            if (p >= low && p <= high) {
                right = Math.max(right, m)
            }
            if (p <= high) {
                s = m + 1
            } else {
                e = m -1 
            }
        }
        if (left === Infinity) left = right
        if ( right === -Infinity) right = left
        result.push(right - left +1 )
    }
    return result
};
console.log(fullBloomFlowers(flowers = [[1,6],[3,7],[9,12],[4,13]], people = [2,3,7,11]))