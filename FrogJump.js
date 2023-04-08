/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    if (stones.length <= 1) return false;

    let isCrossing = cross(stones, 0);

    return isCrossing
};

const cross = (stones, position) => {
    if (position >= stones.length || position < 0) return false;
    if (position === stones.length-1) return true;
    let jump;
    if (position === 0) {
        jump = 1;
    } else {
        jump = stones[position];
    }
    if (jump === 1 && stones[jump] === stones[stones.length-1]) {
        return true
    } else if (jump !== 1) {

        if (cross(stones, jump - 1) || cross(stones, jump) || cross(stones, jump + 1)) {
            return true;
        } else {
            return false;
        }
    }
}


console.log(canCross([0,1,3,5,6,8,12,17]))