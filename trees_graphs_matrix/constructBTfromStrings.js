function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// 
var str2tree = function(str) {
   let root = null, stack = [];
   for (let i = 0; i < str.length; i++) {
       let node = new TreeNode(parseInt(str[i]))
       if (!root) {
           root = node;
           stack.push(node)
       } else {
           let prev = stack[stack.length-1]
           if (str[i] === '(') {
               i++;
               node = new TreeNode(parseInt(str[i]))
               if (prev) prev.left = node;
               if (str.substring(i+1, i+3) !== ')(') {
                   stack.push(node)
                }
           } else if (str.substring(i, i+2) === ')(') {
               i+=2
               if (prev) prev.right = node
               if(str.substring(i+1) === "(") stack.push(node)
               i+=2
           } else {
               stack.pop();
           }
       }
   } 
   return root;
};
console.log(str2tree("4(2(3)(1))(6(5))"))