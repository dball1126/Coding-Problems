/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    let tgt = [], sorted = []
    for (let i = 0; i < times.length; i++) {
        if (i === targetFriend){
            tgt.push(times[i])
        } else {
            sorted.push(times[i])
        }
    }
    sorted.sort((a,b) => a[0] - b[0])

    let [tgX, tgY] = tgt[0]

    for (let i = 0; i < sorted.length; i++) {
        let [vx, vy] = sorted[i]
        if (tgX <= vx) {
            return i
        } else {
            
        }
    }
};