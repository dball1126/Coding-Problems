function sequencesToCreateBST(nums) {
    return sequencesRecursive(nums);
  }
  
  function sequencesRecursive(nums) {
    if (!nums.length) {
      return []
    }
    else {
        const prefix = [nums[0]], left = [], right = []

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] < prefix[0]) {
                left.push(nums[i])
            } else {
                right.push(nums[i])
            }
        }

      let perms = permutations(sequencesRecursive(left), sequencesRecursive(right));
      if (!perms.length) {
        perms = [prefix];
      }
      else {
        perms.forEach(p => p.unshift(prefix[0]));
      }
      return perms;
    }
  }
  
  function permutations(left, right) {
    if (!left.length || !right.length) {
      if (!left.length) return right
      return left
    }
    else {
      let perms = [];
      for (let i = 0; i < left.length; ++i) {
        for (let j = 0; j < right.length; ++j) {
            let permArrays = permutationsRecursive([], left[i], right[j], [], 0, 0)
            // console.log(permArrays)
            perms.push(...permArrays);
        }
      }
      return perms;
    }
  }
  
  function permutationsRecursive(perms, list1, list2, prefix, i, j) {
    if (i === list1.length && j === list2.length) {
      perms.push(prefix.slice(0));
    }
    else {
      if (i < list1.length) {
        prefix.push(list1[i]);
        permutationsRecursive(perms, list1, list2, prefix, i + 1, j);
        prefix.pop();
      }
  
      if (j < list2.length) {
        prefix.push(list2[j]);
        permutationsRecursive(perms, list1, list2, prefix, i, j + 1);
        prefix.pop();
      }
    }
    return perms;
  }

  console.log(sequencesToCreateBST([3,1,2,5,4,6]))