//정답 확인문제 

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}
  // 배열 내 최소값 제거
// splice로 자르는데,  (arr.위치(최소값의(확산연산자)), 1) 최소값에서, 1(최소값만 빼버림)
// 만약 arr의 길이가 1보다 작을경우는 -1만 반환.

// function solution(arr) {
//     if(arr.length === 1) return[-1];


//     let i = 0;
//     for (let j = 1; j<arr.length; j++){
//         if(arr[j]<arr[i]) {
//             i=j;
//         }
//     }

//     arr.splice(i,1);

//     return arr;
// }
        