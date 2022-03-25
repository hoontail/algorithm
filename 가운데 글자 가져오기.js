function solution(s) {
  let answer = "";

  if (s.length % 2 == 0) {
    answer = s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    answer = s[(s.length - 1) / 2];
  }
  return answer;
}

// 짝수일 경우 가운데 두글자 가져옴. 홀수 일 경우 가운데.

const solution = (s) => {
  return s.length % 2
    ? s[parseInt(s.length / 2)]
    : s.substr(s.length / 2 - 1, 2);
};   // 3항연산자와 화살표 함수를 통해 간단하게 표현 가능. 0은 false 값을 출력한다!
