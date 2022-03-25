function solution(absolutes, signs) {
    let answer = 0;
   for(i=0; i<absolutes.length; i++) { 
       if(signs[i] === true){  
       answer += absolutes[i]
   }else{
        answer -= absolutes[i]
   }
        
         console.log(answer)
   }
     return answer;
}


// function solution(absolutes, signs) {
//     let answer = 0;
//     for (let i = 0; i < absolutes.length; i++) {
//         signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
//     }
//     return answer;
// }   간단하게 3항연산자를 이용한 방법. !!! 0만 false 다 !!! 
