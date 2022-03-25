function solution(n) {
    return (n+'').split('').reverse().map(i => parseInt(i));
 }//미친놈이 리버스를 rebirth 로 하고잇네  
 // 문자열 변환 - > 쪼갠뒤 -> 뒤집기 -> 맵함수로 각각의 index 값에 parseInt로 다시 정수로 변환.
 // n+'' 는 String(n) 으로도 사용 가능 
      
 
 