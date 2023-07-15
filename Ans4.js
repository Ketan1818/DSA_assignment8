class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function constructTree(s, startIndex, endIndex) {
    if (startIndex > endIndex) {
      return null;
    }
  
    let rootIndex = startIndex;
    while (rootIndex <= endIndex && s[rootIndex] !== '(') {
      rootIndex++;
    }
  
    const rootVal = parseInt(s.substring(startIndex, rootIndex));
    let count = 0;
    let i = rootIndex;
    while (i <= endIndex) {
      if (s[i] === '(') {
        count++;
      } else if (s[i] === ')') {
        count--;
      }
  
      if (count === 0) {
        break;
      }
  
      i++;
    }
  
    const leftChildString = s.substring(rootIndex + 1, i);
    const rightChildString = s.substring(i + 2, endIndex);
  
    const root = new TreeNode(rootVal);
    root.left = constructTree(s, rootIndex + 1, i - 1);
    root.right = constructTree(s, i + 2, endIndex - 1);
  
    return root;
  }
  
  function treeToString(root) {
    if (root === null) {
      return '';
    }
  
    let result = root.val.toString();
  
    if (root.left || root.right) {
      result += '(' + treeToString(root.left) + ')';
    }
    if (root.right) {
      result += '(' + treeToString(root.right) + ')';
    }
  
    return result;
  }
  
  function constructBinaryTreeFromString(s) {
    const root = constructTree(s, 0, s.length - 1);
    return treeToString(root);
  }
  