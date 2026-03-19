function solution(elements) {
  const set = new Set();

  const newElements = [...elements, ...elements];
  for (let i = 1; i <= elements.length; i++) {
    for (let idx = 0; idx < elements.length; idx++) {
      const arr = newElements.slice(idx, idx + i);
      const sum = arr.reduce((a, b) => a + b, 0);
      set.add(sum);
    }
  }

  return set.size;
}