function solution(n) {
 
    
    let re = (n+'').split('').sort(function(a, b ){
        return b - a  // 문자열 변환. split 나누고 sort로 내림차순 정렬 
    }) 
    let  b = re.join('') // 배열을 꺼내 문자열로 붙여줌 
    return parseInt(b) //숫자로 변환해서 출력 
}



