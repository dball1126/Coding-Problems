/**
 * Time: O(n)
 * Space: O(1)
 */
var spiralOrder = function(matrix) {
    let topL = 0, topR = matrix[0].length-1, botL = 0, botR = matrix.length-1, result = []
    const checkResult = () => {
        return result.length === matrix.length * matrix[0].length
    }
    while (result.length !== matrix.length * matrix[0].length) {
        let r = topL, c = topL

        //go right
        while (r <= topR) {
            result.push(matrix[c][r])
            if (r === topR) {
                c+=1;
                break
            }
            r++
        }
        topR -=1; topL += 1
        if (checkResult()) return result

        //go down
        while (c <= botR) {
            result.push(matrix[c][r])
            if (c === botR) {
                r -=1;
                break;
            }
            c += 1
        }
        botR -= 1
        if (checkResult()) return result

        // go left
        while (r >= botL) {
            result.push(matrix[c][r])
            if (r === botL) {
                c -=1
                break
            }
            r -= 1
        }
        botL += 1
        if (checkResult()) return result

        // go up
        while (c >= topL) {
            result.push(matrix[c][r])
            if (c === topL) {
                r +=1;
                break;
            }
            c -= 1
        }
        if (checkResult()) return result
    }
};

console.log(spiralOrder(matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]))