function solution(price, money, count) {
    var answer = 0;
    let sum = 0
    for(let i = 1 ; i <= count; i++){
        sum += price*i
        if(sum > money){
            answer = sum - money
        }else{
           answer = 0;
        }

}}

// i를 기존에 두듯 0 으로 두고 시작하면 0원이 먼저 출력되어 값이 틀려지게됨.

// function solution(price, money, count) {
//     let answer = 0;

//     for (let i = 1; i <= count; i++) {
//         answer += price * i;
//     }
//     return answer > money ? answer - money : 0;
// }    3항연산자를 연습좀 해야 겠다...