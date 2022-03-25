function solution(n) {
    let x = Math.sqrt(n) // 제곱근을 구하는 메서드 
    if( x % 1 == 0){ // 정수 체크... 나는 소수가 양의 정수가 아닌걸 검색해서 암 ㅎㅎ!!
        answer = (x+1) ** 2
        return answer   // 쨋든 x가 정수면 제곱근이 맞기 때문에 x+1의 제곱을 리턴. 
    }
    return -1; // 그 외 에는 -1을 리턴해준다.
}

// // math.sqrt를 사용하지않고 구하는 방식...

// function nextSqaure(n){
//     var result = 0;
//     var x = 0;
//     while (x*x < n){
//       x++;
//     }
//     if (x*x == n){
//       x++;
//       result = x*x; 
//     }else{
//       result = -1;
//     }
  
//     return result;
//   }
// Number.isInteger 라는 정수판별법 도 있음.