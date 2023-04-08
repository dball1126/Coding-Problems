class Node {
    val;
    left = null
    right = null;
    constructor(val) {
        this.val = val;
    }
}



const firstCommonAncestor = (tree, n11, n22) => {
    let result = null;
    
    const dfs = (r, tgt, type) => {
        if (!r) return null;
        if (r.val === tgt.val){
             return r;
            }
        let left = dfs(r.left, tgt, type);     
        let right = dfs(r.right, tgt, type);

        if (!type) {
            if ((left && left.val === tgt.val) || (right && right.val === tgt.val)) {
                r.found = true
            } else if ( left && left.found ||  right && right.found) {
                r.found = true;
            }
        } else {
            if (( left && left.val === tgt.val || right && right.val === tgt.val) && r.found && !result) {
                result = r;
            }
        }
        if (!type) {
            return r;
        } else if (right && right.val === tgt.val) {
            return right;
        } else if (left && left.val === tgt.val) {
            return left;
        }
    }

    tree = dfs(tree, n11, false)
    dfs(tree, n22, true)

    return result;
}

let n1 = new Node(2)
let n2 = new Node(1)
let n3 = new Node(3)
let n4 = new Node(4)
let n5 = new Node(5)
let n6 = new Node(6)
let n7 = new Node(7)

n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5
n4.left = n6
n6.right = n7

console.log(firstCommonAncestor(n1, n7, n5))
