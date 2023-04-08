
var hammingDistance = function(x, y) {
    if (x > y) return hammingDistance(y, x)

    let xPos = 0;
    let yPos = 0;
    while (x !== 0) {
        x >>= 1
        xPos += 1
    }
    while (y !== 0) {
        y >>= 1
        yPos += 1
    }
    return yPos - xPos
};

console.log(hammingDistance(3,1))