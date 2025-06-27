// Binary Search
// Time: O(n * log(m))...m being the min and max cumulative sum in the array
// SpacE: O(1)
var minEatingSpeed = function(piles, h) {
    let min = 1, max = -Infinity, ratePerHour = Infinity

    if (piles.length === 1) {
        let count = 1;
        while (piles[0] > h) {
            count+=1
            h+=h
        }
        return count
    }

    for (let b of piles) {
      
        max = Math.max(b, max)
    }
    ratePerHour = max;
    let l = min, r = max
    const canEatBananas = (bananas) => {
        let hours = 0;

        for (let i = 0; i < piles.length; i++) {
            let b = piles[i]
            if (hours > h) break;
            if (b <= bananas) {
                hours++
            } else {

                hours += Math.ceil(b / bananas)
            }
       
        }
        if (hours <= h) {
            ratePerHour = Math.min(ratePerHour, bananas)
        }
        return hours <= h
    }

    while (l < r) { // log(m)...where m is the range of the min and max sum in the array
        let bananas = Math.floor((r + l) / 2)
        if (canEatBananas(bananas)) {
          
            r = bananas
        } else {
            l = bananas + 1
        }
    }
    return ratePerHour;
};
console.log(minEatingSpeed( [332484035,524908576,855865114,632922376,222257295,690155293,112677673,679580077,337406589,290818316,877337160,901728858,679284947,688210097,692137887,718203285,629455728,941802184]
    , h = 823855818))
//  piles = [3,6,7,11], h = 8
//   3    -   27
/**       15
 *  3    15    ratePer hour = 15
 *    9     rateper hour = 9
 * 
 * 3 9
 * 
 *  6   rateper hour = 6
 * 
 * 3 6
 *  4 rateper hour = 4
 * 3 4
 *  3
 * 
 */
