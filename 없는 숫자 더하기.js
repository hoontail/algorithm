function solution(numbers) {
    let answer = 0;
      for(let i = 0; i < 10; i++)
         if(numbers.includes(i)){  // 넘버스안에 1~10의 숫자가 있으면 진행
             continue;
         }
      else{  //없으면 그 숫자들을 다 더해준다.
          answer += i
      }
         
      return answer;
  }

  