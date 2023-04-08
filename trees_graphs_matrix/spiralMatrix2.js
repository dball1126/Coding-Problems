/**
 * O(n*2) Time and Space:
 */
var spiralOrder = function(n) {

    let matrix = [...new Array(n)].map(a => new Array(n))
    let count = 1

    let topL = 0, topR = n-1, botL = 0, botR = n-1
    const checkResult = () => {
        return count > n * n
    }
    while (count <= (n * n)) {
        let r = topL, c = topL

        //go right
        while (r <= topR) {
            matrix[c][r] = count
            count += 1
            
            if (r === topR) {
                c+=1;
                break
            }
            r++
        }
        topR -=1; topL += 1
        if (checkResult()) return matrix

        //go down
        while (c <= botR) {
            matrix[c][r] = count
            count += 1
            if (c === botR) {
                r -=1;
                break;
            }
            c += 1
        }
        botR -= 1
        if (checkResult()) return matrix

        // go left
        while (r >= botL) {
            matrix[c][r] = count
            count += 1
            if (r === botL) {
                c -=1
                break
            }
            r -= 1
        }
        botL += 1
        if (checkResult()) return matrix

        // go up
        while (c >= topL) {
            matrix[c][r] = count
            count += 1
            if (c === topL) {
                r +=1;
                break;
            }
            c -= 1
        }
        if (checkResult()) return matrix
    }
    return matrix
};

console.log(spiralOrder(1))