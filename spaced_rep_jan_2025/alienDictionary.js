/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    //build the graph and use dfs to check the cycle
    var map = new Map();
    //'w': [e], 'r':[t], t:[f], e:[r], f:[]
    var visited = new Set(), visiting = new Set();
    var res = '';
    for(const word of words) {
        for(const c of word) {
            if(!map.has(c))map.set(c, new Set());
        }
    }

    //build graph
    for(var i = 0; i < words.length-1;i++) {
        var w1 = words[i], w2 = words[i+1];
        var len = Math.min(w1.length, w2.length);

        for(var idx = 0; idx < len; idx++) {
            if(w1[idx] !== w2[idx]) {
                map.get(w1[idx]).add(w2[idx]);
                break;
            }
        }
        if(idx === w2.length && idx < w1.length)return res;
    }

    var hasCycle = (node) => {
        if(visited.has(node))return false;
        if(visiting.has(node))return true;
        visiting.add(node);

        var neighbors = map.get(node);
        for(const n of neighbors) {
            if(hasCycle(n))return true;
        }
        visiting.delete(node);
        visited.add(node);

        res = node + res;
        return false;
    }

    //start traverse
    for(const key of map.keys())if(hasCycle(key))return '';
    return res;
};
console.log(alienOrder(["wrt","wrf","er","ett","rftt"]))