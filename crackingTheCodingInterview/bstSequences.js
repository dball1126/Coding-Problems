const weaveLists = (left, right, weaved, prefix) => {
    if (!left.length || !right.length) {
        weaved.push([...prefix, ...left, ...right])
        return;
    }
    let num = left.shift();
    prefix.push(num);
    weaveLists(left, right, weaved, prefix)
    prefix.pop();
    left.unshift(num);

    num = right.shift();
    prefix.push(num);
    weaveLists(left, right, weaved, prefix)
    prefix.pop();
    right.unshift(num)
}


const allSequences = (n) => {
    if (!n) return [[]]
    let leftSeq = [], rightSeq = [], result = [], prefix = [n.val]
    leftSeq = allSequences(n.left)
    rightSeq = allSequences(n.right)
  
    for (let i = 0; i < leftSeq.length; i++) {
        for (let j = 0; j < rightSeq.length; j++) {
            let weaved = [];
           let recur =  weaveLists(leftSeq[i], rightSeq[i], weaved, prefix)
           console.log(recur)
            result.push(...weaved)
        }
    }
    return result;
}

class Node {
    val;
    left = null
    right = null;
    constructor(val) {
        this.val = val;
    }
}

let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(3)
let n4 = new Node(4)
// let n5 = new Node(5)
n1.left = n2
n1.right = n3
n2.right = n4
// n3.right = n5
console.log(allSequences(n1))