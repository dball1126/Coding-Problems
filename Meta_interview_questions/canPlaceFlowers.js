/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// Greedy
// Time: O(n)
// Space: O(1)
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true
    for (let i = 0; i < flowerbed.length; i++) {
        let prev = 0, next = 0, curr = flowerbed[i]
        if ((i-1) >= 0) prev = flowerbed[i-1]
        if ((i+1) < flowerbed.length) next = flowerbed[i+1]

        if (curr === 0 && prev === 0 && next === 0) {
            n--
            flowerbed[i] = 1
        }
        if (n === 0) return true;
    }
    
    return false
};
console.log(canPlaceFlowers(flowerbed = [0,0,1,0,0], n = 1)) // = true