function solution(record) {
  var answer = [];

  let nicknameMap = new Map();
  for (let i = 0; i < record.length; i++) {
    [action, userId, nickname] = record[i].split(" ");
    if (action === "Enter" || action === "Change") {
      nicknameMap.set(userId, nickname);
    }
  }
  for (let i = 0; i < record.length; i++) {
    [action, userId, nickname] = record[i].split(" ");
    if (action === "Change") continue;
    nickname = nicknameMap.get(userId);
    str = `${nickname}님이 ${
      action === "Enter" ? "들어왔습니다." : "나갔습니다."
    }`;
    answer.push(str);
  }

  return answer;
}