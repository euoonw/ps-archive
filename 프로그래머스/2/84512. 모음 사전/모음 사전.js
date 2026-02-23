function solution(word) {
  const s = ["", "A", "E", "I", "O", "U"];
  const dic = [];
  for (let i1 = 1; i1 < s.length; i1++) {
    const t1 = s[i1];
    dic.push(t1);
    for (let i2 = 1; i2 < s.length; i2++) {
      const t2 = t1 + s[i2];
      dic.push(t2);
      for (let i3 = 1; i3 < s.length; i3++) {
        const t3 = t2 + s[i3];
        dic.push(t3);
        for (let i4 = 1; i4 < s.length; i4++) {
          const t4 = t3 + s[i4];
          dic.push(t4);
          for (let i5 = 1; i5 < s.length; i5++) {
            dic.push(t4 + s[i5]);
          }
        }
      }
    }
  }
  return dic.indexOf(word) + 1;
}