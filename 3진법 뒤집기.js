function solution(n) {
    let re = n.toString(3).split('').reverse().join('')
      //toString(x) x = 진법 표기
    return parseInt(re, 3) // 얘는 3진법이야 ! 10진법으로 돌려줘 ! 디폴트값이 10진법인듯
}          

// function solution(n) {
//     let n_3 = [];
//     let answer = 0;
//     while(true) {
//         n_3 += n % 3;
//         if(n < 3) 
//             break;
//         n = Math.floor(n / 3);
//     }
//     for(let i = n_3.length - 1, e = 0; i >= 0; i--, e++) {
//         answer += n_3[i] * (3**e);
//     }
//     return answer;
// }