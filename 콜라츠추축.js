function solution(num) {
    
    let count = 0;
    if(num == 1 ){          // 처음에 최소값인 1 이 들어 왔을때 약간 버그가 생기는듯
        return 0            // 
    }
    while(true){                   //while 문을 돌린다 
        if(num % 2 == 0){          // 짝수면 /2, 홀수면 3곱하고 +1 (지문 조건 )
            num = num / 2          // 카운트에 증가 (몇번 돌았는지)
            count ++
        }else{
            num= num *3 +1 
            count ++
        }if( num == 1 ){          // 이게 1이 되면 count 를 반환 
            return count 
       
        } if( count > 500){         // 500번이 넘어도 1이 안되면 -1 반환 
            count = -1 
            break;
        }      
    
    }
    return count;        
}

//콜라츠 추측 

// function collatz(num) {
//     var answer = 0;
//     while(num !=1 && answer !=500){
//         num%2==0 ? num = num/2 : num = num*3 +1;
//     answer++;
//   }
//     return num == 1 ? answer : -1;
// }  이런방식으로도 while 문 사용 가능


// function solution(num) {  조건을 잘 생각해보면 이렇게도 가능.. 
//     var count = 0;

//     while (count < 500) {
//         if (num === 1) {
//             return count;
//         }
//         count ++;
//         num = num % 2 === 0 ? num /2 : num *3 +1;
//     }

//     return -1;
// }