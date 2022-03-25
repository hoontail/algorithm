function solution(month, day) {
    let m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  //월마다 날짜
    day += 98;  //day 에 98일 더해주고 
    while(true) {
        if(month > 12) { // 이건 12월이 넘어갔을때 
            month = 1;
            continue;
        }
        if (day > m[month - 1]){ 
            day -= m[month++ - 1];
        } else break;
    }
    return `${month}월 ${day}일`
}

console.log(solution(12, 31))  
// for문으로 풀기..

// /function solution(month, day){
// 	let month1 = [31 , 28 , 31, 30 , 31 , 30 , 31, 31 , 30 , 31 ,30 , 31]
// 	let day1 = day + 98;
//   let temp = 0;
//   let count = 1;
//     for(let i = 1; i < month; i++){
//      temp += month1[i - 1];
//     }
//      temp += day1  //받은 매개변수 날짜에서 시작하면되는데 멍청하게 2016년 문제 때매 
// console.log(temp)  // 모든 날을 더해서 temp에 실어준다
  
//   for(let i = 1; i <= 12 ; i++){ //12월 까지 i를 돌리고 
//       if(temp > month1[i - 1]){  //temp가 i번째-1 (자기 월) 보다 클때
//         temp -= month1[i - 1];  count ++   // 템프에서 그 월의 일수 만큼 빼주고 count에
//       }//else{                         //1을 더해준다(이게 곧 월) 근데 사실 매개변수인 
//        // break;                       // month에 직접적으로 추가해도 되긴 한다.
//       //}   오 강사님이 else break 넣으라 하셧는데 생각해보니 없어도 될거같아 빼보니 됨.
//     if(count == 13){ //만약 count 가 13이 넘게되면 (해가 바뀜)
//         count = 1  // 다시 count를 1로 돌려주고 (1월로)
//         i = 0; //i 또한 초기화를 시켜준다. 마찬가지로 다시 돌아야 하기 때문에.
//       }
//   }
  
//   return `${count}월 ${temp}일`  // 월의 일수 만큼 다 빼고 추가된 count는 월, 나머지 일
// }
// // ㅄ같이 짠 로직 가슴아픈 추억 
// console.log(solution(12,20))
  

