function solution(a, b) {
    let answer = '';
    let month = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 달마다 날짜 수
    let week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED","THU"]; // 요일
    let temp = 0;
    
   for(let i = 1; i < a; i++){
     temp += month[i - 1];  //121 24 145 
   }  // 5월은 4월까지만 더해져야한다. 그러므로 i를 1로두고 -1을 먹여 계산.
    temp += b -1;  //0 부터 도니까 -1을 해주는거같은데 정확하게 이해는 안간다 ...
    answer = week[temp % 7];
    return answer;
}

//많이 어렵게 다가왔던 문제 ... 풀이보고도 경악 

// function getDayName(a,b){
//     var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
//     var date = new Date(`2016-${a}-${b}`);
//   var day = date.getDay()
//     return arr[day];
// }  Date 함수에 대한 이해 필요 
