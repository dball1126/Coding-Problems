class AdjacensyList {
    keys = {}
    constructor(){}
    insert(value, aList) {
        const [course, preReq] = value;
        if (!aList.keys.hasOwnProperty(course)) {
            aList.keys[course] = [preReq]
        } else {
            aList.keys[course].push(preReq)
        }
        if (!aList.keys.hasOwnProperty(preReq)) {
            aList.keys[preReq] = []
        }
    }
}
const newList = new AdjacensyList();
const courses = [[0,1],[0,2],[1,3],[1,4],[3,4]]

courses.forEach(course => {
    newList.insert(course, newList)
});

console.log(newList)

