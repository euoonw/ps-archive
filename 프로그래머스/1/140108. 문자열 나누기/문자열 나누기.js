function solution(s) {
  var answer = 0;

  while (s.length > 0) {
    const x = s[0];
    let cnt1 = 1; // x 개수
    let cnt2 = 0; // x 아닌 개수
    let split = false;

    let i;
    for (i = 1; i < s.length; i++) {
      if (s[i] === x) cnt1++;
      else cnt2++;

      if (cnt1 === cnt2) {
        answer++;
        s = s.substring(i + 1);
        split = true;
        break;
      }
    }
    // if (i === s.length) {
    //   answer++;
    //   break;
    // }
    if (!split) {
      answer++;
      s = "";
    }
  }
  return answer;
}