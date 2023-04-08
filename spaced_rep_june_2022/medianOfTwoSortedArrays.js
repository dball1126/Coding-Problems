
// var findMedianSortedArrays = function(a, b) {
//     let aL = a.length, bL = b.length

//     if (bL < aL) return findMedianSortedArrays(b,a)
//     let mid = Math.floor((aL+bL) / 2), s = 0, e = a.length - 1

//     while (true) {
//         let aMid = Math.floor((s + e)/2)
//         let bMid = mid - aMid - 2
//         console.log("s + " + s)
//         console.log("e + " + e)
//         console.log("aMid + " + aMid)
//         console.log("bMid + " + bMid)

//         let Aleft = aMid >= 0 ?  a[aMid] : -Infinity
//         let Aright = aMid+1 < aL ?  a[aMid+1] : Infinity
//         let Bleft = bMid >= 0  ?  b[bMid] : -Infinity
//         let Bright = bMid+1 < bL ?  b[bMid+1] : Infinity

//         if (Aleft <= Bright && Bleft <= Aright) {
//             if ((aL + bL)  % 2) {
//                 return Math.min(Aright, Bright)
//             }   
//                 return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2
//         } else if (Aleft > Bright) {
//              e = aMid - 1
//         } else {
//             s = aMid + 1
//         }
//     }
// };

// ***********************************************************

/**        aLeft|aRight
 * Formaula  [1]|[4]
 *           [2]|[3]
*          bLeft|bRight

    a Left <= bRight && bLeft <= aRight

 * Time: log(n) n is the smallest array between a and b
 * Space: O(1)
 */

const findMedianSortedArrays = (a, b) => {
    if (b.length < a.length) return findMedianSortedArrays(b, a)

    let s = 0, e = a.length - 1, mid = Math.floor((b.length + a.length) / 2) - 2

    while (true) {
        let aMid = Math.floor((s + e) / 2)
        let bMid = mid - aMid;

        let aLeft = aMid >= 0 ? a[aMid] : -Infinity
        let aRight = aMid+1 < a.length ? a[aMid+1] : Infinity
        let bLeft = bMid >= 0 ? b[bMid] : -Infinity
        let bRight = bMid+1 < b.length ? b[bMid+1] : Infinity

        if (aLeft <= bRight && bLeft <= aRight) {
            console.log(aLeft)
            console.log(aRight)
            console.log(bLeft)
            console.log(bRight)
            if ((a.length + b.length) & 1) { // odd
                return Math.min(aRight, bRight)
            } else { // even
                return (Math.max(aLeft, bLeft) + (Math.min(aRight, bRight))) / 2
             }
        } else if (aLeft > bRight) {
            e = aMid - 1
        } else {
            s = aMid + 1
        }
    }
}

// console.log(findMedianSortedArrays([6,7],[8]))

console.log(findMedianSortedArrays([2,3],[1]))