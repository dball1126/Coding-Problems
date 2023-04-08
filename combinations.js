const combos = (n, k) => {
    const allCombos = [];
    let i = 1;
    let allNums = [];

    while (i <= n) { allNums.push(i); i++; };

    const find = (curr, start) => {
        if (curr.length === k) {
            return allCombos.push(curr.slice());
        }

        for (let i = start; i < allNums.length; i++) {
            let num = allNums[i];
            curr.push(num);
            find(curr, i+1)
            curr.pop();
        }
    }

    find([], 0)

    return allCombos
}


// var combine = function(n, k) {
  
//     let i,l;
    
//     // render the 1...n numbers in here
//     let consider = [];
//     // to keep track of real solutions
//     let paths = [];
    
//     // If there are no numbers, then, empty answers
//     if (!n) {
//         return [];
//     }
    
//     // if k = 0, then only the empty set is a solution
//     if (!k) {
//         return [[]];
//     }
        
//     // fill in the numbers to consider
//     for (i = 0; i < n; i++) {
//         consider.push(i+1);
//     }
    
//     // Our recursively called function.
//     // Pre is the current numbers in our set
//     // c = is the rest of the numbers we're still considering
    
//     let find = function (pre, c) {
//         // take a look at stdout to see the order in which we're finding paths
//         console.log('consider', pre, c);
        
//         // if we have a pre array of length k, that's a solution
//         if (pre.length === k) {
//             paths.push(pre);
//         } else {
//             // otherwise, we need to make pre bigger 
//             let i, l;
//             // cloning the items we're considering. We want to peel off one, and then send that
//             // back to our find function with the rest of the candidates.
//             let nextC = [...c];
            
//             for (i = 0, l = nextC.length; i < l ; i++) {
//                 // peel off the first item
//                 let n = nextC.shift();
//                 // add it to our current pre path. Again, cloning to not spoil upcoming paths in the loop
//                 let nextP = [...pre, n];
//                 // with our embiggened pre, and shrunken candidates, hit find again
//                 find(nextP, nextC);
//             }
//         }
//     }
    
//     // initial call
//     find ([], consider);
    
//     return paths;
// };


console.log(combos(4, 2))