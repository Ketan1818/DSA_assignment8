function decodeString(s) {
    const countStack = [];
    const stringStack = [];
    let currentCount = 0;
    let currentString = '';
  
    for (const char of s) {
      if (char >= '0' && char <= '9') {
        currentCount = currentCount * 10 + parseInt(char);
      } else if (char === '[') {
        countStack.push(currentCount);
        stringStack.push(currentString);
        currentCount = 0;
        currentString = '';
      } else if (char === ']') {
        const repeatCount = countStack.pop();
        const decodedString = stringStack.pop();
        currentString = decodedString + currentString.repeat(repeatCount);
      } else {
        currentString += char;
      }
    }
  
    return currentString;
  }
  