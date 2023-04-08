var sortedListToBST = function(head) {
  let root = null;
  let arrList = []
  while (head) {
      arrList.push(head.val)
      head = head.next
  }


  const divideNConquer = (arr, node) => {
      if (!arr.length) return null;
      let mid = Math.floor(arr.length / 2)

        if (!node) {
            node = new TreeNode(arr[mid])
            root = node;
        } else if (node.val < arr[mid]) {
            node.right = new TreeNode(arr[mid])
            node= node.right
        } else {
            node.left = new TreeNode(arr[mid])
            node = node.left
        }

        let left = arr.slice(0, mid)
        let right = arr.slice(mid+1)
        divideNConquer(left, node)
        divideNConquer(right, node)
  }
  divideNConquer(arrList, null)
  return root;
};

let listNode = new ListNode(-10)
listNode.next = new ListNode(-5)
listNode.next.next = new ListNode(0)
listNode.next.next.next = new ListNode(5)
listNode.next.next.next.next  = new ListNode(10)


 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

  console.log(sortedListToBST(listNode))