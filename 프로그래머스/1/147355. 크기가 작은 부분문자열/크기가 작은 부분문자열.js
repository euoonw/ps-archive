function solution(t, p) {
  var answer = 0;
  const p_number = parseInt(p);
  for (let i = 0; i <= t.length - p.length; i++) {
    const temp = t.slice(i, i + p.length);
    if (parseInt(temp) <= p_number) answer++;
  }

  return answer;
}