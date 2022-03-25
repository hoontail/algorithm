function solution(num) {
    let answer = '';
    if(num % 2 == 0){   
        answer = "Even"
    }else{
        answer = "Odd"
    }
    return answer;
}

//매개 변수를 2로 나누어 나머지를 통해 짝수, 홀수 구분