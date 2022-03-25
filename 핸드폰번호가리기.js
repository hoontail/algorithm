function solution(phone_number){
    let answer ='';
    for(let i=0; i< phone_number.length; i++){
      if(i < phone_number.length-4){
        answer = answer + "*"
    } else {
      answer = answer + phone_number[i];
    }}
    return answer;
  }
  //번호의 길이에서 4자리 빼고 *로 표기  그 후 뒷번호만 표기해주는 방식

  // function solution(phone_number){
  //   return
  //    '*'.repeat(phone_number.length -4) + phone_number.slice(-4);
  // } repeat 함수와 slice 함수 이용 -를 표기하면 뒤에서 부터 자른다.
