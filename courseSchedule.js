var canFinish = function(numCourses, prerequisites) {
    const adjList = adjacentyList(prerequisites);
    const indegrees = indegreesList(prerequisites)
    const queue = [];

    // Load the queue with all graph nodes that have a indegree of 0;
    for (let key in indegrees) {
        const value = indegrees[key]
        if (value === 0) {
            queue.push([key, value])
            delete indegrees[key]; // safe to remove from indegrees since it's in the queue and we will be checking it.
        }
    }

    while (queue.length) {
        let item = queue.shift();
        const [key, value] = [item[0], item[1]];
        const adjArr = adjList[key];

        // See if we can detect a cycle. The value cannot have the key and vice versa.
        for (let i = 0; i < adjArr.length; i++) {
            const indegreeKey = adjArr[i];
            if (detectCycle(indegreeKey, key, adjList)) return false;
 
            if (indegrees[indegreeKey] !== undefined) {
                indegrees[indegreeKey]--;
                // Load queue up if the indegree is 0;
                if (indegrees[indegreeKey] <= 0) {
                    queue.push([indegreeKey, indegrees[indegreeKey]]);
                    delete indegrees[indegreeKey]
                }
            } 
        }
    }
    return Object.entries(indegrees).length ? false : true
};



const detectCycle = (key, valueToCheck, adjList) => {
    const arr = adjList[key];
    const result = arr.find(ele => ele === parseInt(valueToCheck));
    return result === undefined ? false : true
}

const adjacentyList = (courses) => {
    const list = {};
    courses.forEach(course => {
        const [key, value] = [course[0], course[1]];
        !list[key] ? list[key] = [value] : list[key].push(value);
        if (!list[value]) list[value] = [];
    })
    return list
}

const indegreesList = (courses) => {
    const list = {};
    courses.forEach(course => {
        // we need to set the value as the key here
        const [value, key] = [course[0], course[1]];
        !list[key] ? list[key] = 1 : list[key]++;
        if (!list[value]) list[value] = 0;
    })
    return list
}

// [1,0],[2,3],[0,2]
console.log(canFinish(2, [ [1,0] ]))