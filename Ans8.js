function canAchieveGoal(s, goal) {
    const diffIndices = [];
    const diffChars = [];
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        diffIndices.push(i);
        diffChars.push(s[i]);
      }
    }
  
    if (diffIndices.length !== 2) {
      return false;
    }
  
    return (
      s[diffIndices[0]] === goal[diffIndices[1]] &&
      s[diffIndices[1]] === goal[diffIndices[0]]
    );
  }
  