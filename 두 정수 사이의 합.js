function solution(a, b) {
    let sum = 0;
    if ( a <= b ){
        for(let i = a; i <= b; i++){
            sum+= i ;
        }
    }else {
        for(let i = b; i <= a; i++){
            sum+= i;
        }
    }
    return sum;
}

// sum 에 더해주는 방식.

// function solution(a, b) {
//     return ((a + b) * (Math.abs(b-a) + 1))/ 2;
// }

// 등차수열의 합 공식 이용하기 .... 가우스의 재림 