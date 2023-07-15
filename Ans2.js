function isValid(s) {
    const openStack = [];
    const asteriskStack = [];
  
    for (let i = 0; i < s.length; i++) {
      const c = s.charAt(i);
  
      if (c === '(') {
        openStack.push(i);
      } else if (c === '*') {
        asteriskStack.push(i);
      } else if (c === ')') {
        if (openStack.length > 0) {
          openStack.pop();
        } else if (asteriskStack.length > 0) {
          asteriskStack.pop();
        } else {
          return false;
        }
      }
    }
  
    while (openStack.length > 0 && asteriskStack.length > 0) {
      if (openStack.pop() > asteriskStack.pop()) {
        return false;
      }
    }
  
    return openStack.length === 0;
  }
  const s = "()";
const result = isValid(s);
console.log(result); // Output: true
