function solution(arr1, arr2){
	let answer=0;
  for(let i = 0; i < 7; i ++) { //배열이 7로 정해짐 i가 7될 때 까지 증가
    if(arr2[i] >= 29){ //29는 지문의 내용 처럼 24 + 5 즉 새벽 5시가 넘은 체크아웃은 21로 변환
      arr2[i] = 21
    }
    answer += (arr2[i] - arr1[i]) // 체크아웃 시간인 arr2[i] 번째 에서 체크인 시간인 
  }                               // arr1[i] 를 빼준합을 answer 에 담아줌
    
	return answer;
}
let arr1=[9, 9, 9, 9, 7, 9, 8];
let arr2=[23, 23, 30, 28, 30, 23, 23];
console.log(solution(arr1, arr2))