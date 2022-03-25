function solution(numbers) {
    var answer = [];            
    let sum = 0;
    for(let i = 0 ;  i < numbers.length -1 ; i ++){   // 배열 길이에서 -1 을 하는 이유는 마지막 배열은
        for(let j = i+1; j < numbers.length; j++ ){ // 덧셈이 필요가 없고, j가 배열 범위를 초과해 오류발생
            sum = numbers[i] + numbers[j]            //(js에선 안남..)
            answer.push(sum)
        }  // j = i+1 을 하는 이유는 자기 자신의 idx는 더하지 않아도 됨.                       
    }      // answer에 값들을 넣어주고 
      let s = Array.from(new Set(answer))
        s.sort(function(a , b ){ //Set 함수를 이용해 중복을 제거한뒤 sort로 오름차순 정렬.
             return a - b
        })
    return s;
}