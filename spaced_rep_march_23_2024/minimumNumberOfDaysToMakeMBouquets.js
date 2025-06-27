/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    let low = Infinity, high = -Infinity
    let minDay = Infinity
    for (let bloom of bloomDay) {
        low = Math.min(bloom, low)
        high = Math.max(bloom, high)
    }

    const canBloom = (day) => {
        let total = m * k
        let bouqets = 0
        let visited = new Set()
        for (let d of bloomDay) {
            if (visited.has(d)) continue;
            if (d <= day) {
                visited.add(d)
                bouqets++
                if (bouqets >= k && visited.size >= m) return true
            }   
        }
        return bouqets >= m
    }

    while (low <= high) {
        const checkedRange = low === high
        let mid = Math.floor((high + low) / 2)
        if (canBloom(mid)) {
            minDay = Math.min(minDay, mid)
            high = mid -1
        } else {
            low = mid + 1
        }

        if (checkedRange) break
    }

    return minDay === Infinity ? -1 : minDay
};
console.log(minDays([1,10,3,10,2], m = 3, k = 2))
//  bloomDay = [1,10,3,10,2], m = 3, k = 1
/**
 * 1    10
 *   5       
 * 1   4
 *   2
 * 3 4
 *  3
 */