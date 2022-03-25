function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++){
            answer.push(x*i)
        }
    return answer;
}

// i를 0 부터 시작하면 안됨.(문제상 )