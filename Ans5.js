function compress(chars) {
    let writeIndex = 0;
    let readIndex = 0;
  
    while (readIndex < chars.length) {
      const currentChar = chars[readIndex];
      let count = 1;
  
      while (readIndex + 1 < chars.length && chars[readIndex + 1] === currentChar) {
        count++;
        readIndex++;
      }
  
      chars[writeIndex] = currentChar;
      writeIndex++;
  
      if (count > 1) {
        const countString = count.toString();
        for (let i = 0; i < countString.length; i++) {
          chars[writeIndex] = countString[i];
          writeIndex++;
        }
      }
  
      readIndex++;
    }
  
    return writeIndex;
  }
  