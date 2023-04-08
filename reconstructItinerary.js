/**
 * Create adJacency List.
 * Sort children of the list.
 * Keep track of the visisted itineray. Add the source and Destination and make sure we never visit that again.
 * Time Complexity is O(V + E) where V is each node and E is each neighbor of the node we may have to visit.
 * Space Complexity is O(V) where V is the 
 */

 class Node {
     constructor(val, neighbors = []) {
         this.val = val;
         this.neighbors = neighbors
     }
 }

 const adjacencyList = (tickets) => {
     const map = new Map();

     for (let i = 0; i < tickets.length; i++) {
         let [from, too] = tickets[i];
         if (!map.has(too)) map.set(too, [])
         if (!map.has(from)) map.set(from, [])
         map.get(from).push(too)
     }

     for (let [key, val] of map) {
        val.sort();
     }

     return map;
 }

var findItinerary = function(tickets) {
    let [adjList, visited, stack, result] = [adjacencyList(tickets), new Set(), ["JFK"], []]

    while (stack.length) {
        let node = stack.pop();

        // if (node === "ATL") {
        //     let test = ""
        // }

        // get the smallest hop
        let values = adjList.get(node)
        let val = values.shift();

        if (val && values.length && adjList.get(val)) { // recycle
            adjList.get(node).push(val)
            stack.push(node)
            continue;
        }

        if (val && !visited.has(node + val)) { // check if we visited already.
            visited.add(node + val)
            result.push(node)
            stack.push(val)
        } else {
            // add to result unless the last item is the val
            if (result[result.length-1] !== node && !values.length) result.push(node)
        }

    }

    return result;
};

console.log(findItinerary(tickets = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]))


// JFK > ATL || SFO;
// SFO > ATL 
// ATL > SFO || JFK;
