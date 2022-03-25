function solution(array, commands) {
    var answer = [];
    for(let i = 0; i < commands.length; i ++){ 
        let com = commands[i][2] -1  
        let arr = array.slice(commands[i][0]-1, commands[i][1])
        arr.sort(function(a, b){
         return a- b
             
    }) 
       answer.push(arr[com])
      
        
 
}   //혼자서 풀어본 문제 
  return answer}