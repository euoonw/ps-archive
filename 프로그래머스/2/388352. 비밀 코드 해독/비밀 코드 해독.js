function intersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const intersection = new Set([...set1].filter((x) => set2.has(x)));
  return intersection.size;
}

function solution(n, q, ans) {
  var answer = 0;

  for (let i1 = 1; i1 <= n - 4; i1++) {
    for (let i2 = i1 + 1; i2 <= n - 3; i2++) {
      for (let i3 = i2 + 1; i3 <= n - 2; i3++) {
        for (let i4 = i3 + 1; i4 <= n - 1; i4++) {
          for (let i5 = i4 + 1; i5 <= n; i5++) {
            arr = [i1, i2, i3, i4, i5];
            let j;
            for (j = 0; j < q.length; j++) {
              const intersectionNum = intersection(arr, q[j]);
              if (ans[j] === intersectionNum) {
                continue;
              } else {
                break;
              }
            }
            if (j === q.length) answer++;
          }
        }
      }
    }
  }

  return answer;
}