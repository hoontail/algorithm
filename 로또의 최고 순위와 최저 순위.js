function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1]; // 순서대로 낙첨/6등~ 1등
     let count = 0 ;   // lottos[i]가  win_nums에 있는 갯수
     let count1 = 0;  // 0의 갯수                     
     for(let i = 0; i < 6; i++){
         if(win_nums.includes(lottos[i]))
             count++
         if(lottos[i] == 0)
             count1++
     } 
     
    return [rank[count + count1], rank[count]]
                //0은 우선 맞았다고 생각하면 됨 (최대값), 0을 제외하고 맞은 갯수가 최소값.
 }  