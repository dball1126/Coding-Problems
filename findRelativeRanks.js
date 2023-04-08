


var findRelativeRanks = function(score) {
    let result = score.slice();
    score.sort((a,b) => b - a)
console.log(result)
console.log(score)
    for (let i = 0; i < result.length; i++) {
        const n = result[i];
        let idx = score.indexOf(n)
        switch (idx) {
            case 0:
                result[i] = "Gold Medal"
                break;
            case 1:
                result[i] = "Silver Medal"
                break
            case 2: 
                result[i] = "Bronze Medal"
                break
            default:
                result[i] = idx+1+""
                break;
        }
    }
    return result
};

console.log(findRelativeRanks( score = [5,4,3,2,1]))