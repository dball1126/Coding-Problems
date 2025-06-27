var numTrees = function(n) {
    const result = []
  
    const backtrack = (s, e) => {
        const trees = []
        if (s > e) {
            trees.push([])
            return trees
        }

        for (let i = s; i <= e; i++) {
            let leftArr = backtrack(s, i-1)
            let rightArr = backtrack(i+1, e)
            for (let n1 of leftArr) {
                for (let n2 of rightArr) {
                    const tree = [i]
                    tree.push(...n1)
                    tree.push(...n2)
                    trees.push(tree)
                }
            }
        }
        return trees;
    }
   return backtrack(1, n)
};



// var generateTrees = function(n) {
//     if (n === 0) {
//         return [];
//     }
    
//     const generateTreesHelper = (start, end) => {
//         const trees = [];
        
//         if (start > end) {
//             trees.push([]);
//             return trees;
//         }
        
//         for (let i = start; i <= end; i++) {
//             const leftSubtrees = generateTreesHelper(start, i - 1);
//             const rightSubtrees = generateTreesHelper(i + 1, end);
            
//             for (const left of leftSubtrees) {
//                 for (const right of rightSubtrees) {
//                     const tree = [i];
//                     tree.push(...left.map(val => val));
//                     tree.push(...right.map(val => val));
//                     trees.push(tree);
//                 }
//             }
//         }
//         console.log(trees)
//         return trees;
//     };
    
//     return generateTreesHelper(1, n);
// };

// Example usage
const n = 3;
const result = numTrees(n);
console.log(result);


// console.log(generateTrees(3))