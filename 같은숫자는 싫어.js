function solution(arr){

    var answer = [];
    answer.push(arr[0])
    for(let i = 1; i < arr.length ; i++){  //
        if(arr[i-1] !== arr[i]){
            answer.push(arr[i])
        }
    }
    
return answer;
}

// 완전 이전 것이랑 비교할땐 idx값에서 -1 해서 비교 
// 같은 숫자는 싫어
// function solution(arr)
// {
//     var answer = [];
//     let pre = arr[0];
//     answer.push(pre)
//     for(let i = 1; i < arr.length; i++) {
//         if(pre != arr[i])
//             answer.push(arr[i])
//         pre = arr[i];
//     }
//     return answer;
// }

// console.log(solution([1,1,3,3,0,1,1])