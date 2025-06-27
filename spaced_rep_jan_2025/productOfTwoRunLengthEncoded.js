/**
 * @param {number[][]} encoded1
 * @param {number[][]} encoded2
 * @return {number[][]}
 */
// Two pointer
// Time: O(n)...the total # of freq elements in one array
// Space: O(1)...not counting output array
var findRLEArray = function(encoded1, encoded2) {
    let i = 0, j = 0, result = [], curr = [];
    while (i < encoded1.length && j < encoded2.length) {
        let v = encoded1[i][0] * encoded2[j][0];
        let count = Math.min(encoded1[i][1], encoded2[j][1]);
        encoded1[i][1] -= count;
        encoded2[j][1] -= count;
        if (encoded1[i][1] === 0) i++;
        if (encoded2[j][1] === 0) j++;

        if (!curr.length) {
            curr = [v, count];
        } else {
            if (v === curr[0]) {
                curr[1] += count;
            } else {
                result.push([...curr]);
                curr = [v, count];
            }
        }
    }
    if (curr.length) result.push(curr);
    return result;
};
console.log(findRLEArray( [[1,3],[2,3]], [[6,3],[3,3]]))