/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
// Mergining Arrays
// Time: O(n)...for firstList length
// Space: O(1)...not counting output array
function intervalIntersection(A, B) {
    const ans = [];
    let i = 0, j = 0;
  
    while (i < A.length && j < B.length) {
      // Find the overlapping interval's start and end
      const lo = Math.max(A[i][0], B[j][0]);
      const hi = Math.min(A[i][1], B[j][1]);
  
      // If there's a valid overlap
      if (lo <= hi) {
        ans.push([lo, hi]); 
      }
  
      // Advance the pointer of the interval ending first
      if (A[i][1] < B[j][1]) {
        i++;
      } else {
        j++;
      }
    }
  
    return ans;
  }

console.log(intervalIntersection( firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]))


    // low = 7 high = 16