//답안 확인한 문제 

function solution(n)
{  
    
    let answer = 0;
    n = n.toString() //우선 들어온 자연수 n 을 문자열로 변환
 
    
    for(let i = 0; i < n.length; i++){
        answer += parseInt(n.charAt(i))  //charAt = 문자열의 위치를 반환.
    }
    return answer;
}



// function solution(n)
// {
//     var a = (n + '').split('');
//     var b = 0;
//     for(var i = 0; i < a.length; ++i) {
//         b += parseInt(a[i]);
//     }
//     return b;
//     //return n.toString().split('').reduce((a, b) => (a * 1) + (b * 1));
// }

