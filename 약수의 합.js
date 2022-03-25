function solution(n) {
    var answer = 0;
    for(let i =1; i <= n; i++)
        if(n % i == 0){
            answer += i
        }
    return answer;
}

//약수 다 더하면됨