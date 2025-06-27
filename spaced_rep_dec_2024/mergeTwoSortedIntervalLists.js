

const mergeTwoSortedIntervalLists = (list1, list2) => {

    let result = [], idx1 = 0, idx2 = 0, prev;
    while (idx1 < list1.length || idx2 < list2.length) {
        let currList;
        if (idx1 >= list1.length) {
            currList = list2[idx2];
            idx2++;
        } else if (idx2 >= list2.length) {
            currList = list1[idx1];
            idx1++;
        } else {
            if (list1[idx1][0] <= list2[idx2][0]) {
                currList = list1[idx1];
                idx1++
            } else {
                currList = list2[idx2];
                idx2++
            }
        }
        // handle merge
        if (!prev || prev[1] < currList[0]) {
            result.push(currList)
        } else { 
            prev[1] = Math.max(prev[1], currList[1])
        }
        prev = result[result.length-1]
    }
    return result;
}
console.log(mergeTwoSortedIntervalLists([[1,5], [10,14], [16,18]], [[2,6], [8,10], [11,20]]))

/**
*  [[16,18]]
*  []
 * 
 * iteration 1: currList = [1,5]: result = [[1,5]], prev = [1,5], idx1 = 1, idx2 = 0
 * iteration 2: currList = [2,6]: result = [[1,6]], prev = [1,6], idx1 = 1, idx2 = 1
 * iteration 3: currList = [8,10]: result = [[1,6], [8,10]], prev = [8,10], idx1 = 1, idx2 = 2
 * iteration 4: currList = [10,14]: result = [[1,6], [8,14]], prev = [8, 14] , idx1 = 2, idx2 = 2
 * iteration 5: currList = [11,20]: result = [[1,6], [8,20]], prev [8,20], idx1 = 2, idx2 = 3
 * iteration 6: currList = [16,18]: result = [[1,6], [8,20]], prev = [8,20], idx1 + 3, idx2 = 3
 * 
 */