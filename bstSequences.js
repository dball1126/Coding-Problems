const weaveLists = (first, second, results, prefix) => {
  if (!first.length || !second.length) {
    results.push([...prefix, ...first, ...second])
    return;
  }

  let headFirst = first.shift();
  prefix.push(headFirst)
  weaveLists(first, second, results, prefix)
  prefix.pop()
  first.unshift(headFirst)

  let headSecond = second.shift();
  prefix.push(headSecond)
  weaveLists(first, second, results, prefix)
  prefix.pop();
  second.unshift(headSecond)
}

const allSequences = (n) => {
  let result = [], prefix = [], leftSeq = [], rightSeq = []
  if (!n) return [result];
  prefix.push(n.val)

  leftSeq = allSequences(n.left)
  rightSeq = allSequences(n.right)

  for (let i = 0; i < leftSeq.length; i++) {
    for (let j = 0; j < rightSeq.length; j++) {
      let weaved = []
      weaveLists(leftSeq[i], rightSeq[j], weaved, prefix)
      
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

let n1 = new Node(3)
let n2 = new Node(1)
let n3 = new Node(4)
let n4 = new Node(2)
// let n5 = new Node(5)
// let n6 = new Node(6)
// let n7 = new Node(7)
n1.left = n2
n1.right = n3
n2.right = n4
// n3.right = n5


// n2.left = n6

// n3.left = n7

console.log(allSequences(n1))