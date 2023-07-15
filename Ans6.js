function findAnagrams(s, p) {
    const pMap = new Map();
    for (const char of p) {
      pMap.set(char, (pMap.get(char) || 0) + 1);
    }
  
    const result = [];
    let left = 0;
    let right = 0;
    let count = p.length;
  
    while (right < s.length) {
      if (pMap.has(s[right]) && pMap.get(s[right]) > 0) {
        pMap.set(s[right], pMap.get(s[right]) - 1);
        count--;
        right++;
  
        if (count === 0) {
          result.push(left);
        }
      } else {
        if (pMap.has(s[left])) {
          pMap.set(s[left], pMap.get(s[left]) + 1);
          count++;
        }
        left++;
      }
    }
  
    return result;
  }
  