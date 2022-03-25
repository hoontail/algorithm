function solution(sizes) {
    let a = 0;
    let b = 0;
     let box = sizes
        for(let i = 0 ; i < box.length ; i++){         
        if(box[i][0] > box[i][1]){    // 배열내 숫자를 비교해서 큰수를 한쪽에 담아주기
             let tmp = box[i][0];
             box[i][0] = box[i][1];  //위치이동은 이렇게 해야한다 ! 
             box[i][1] = tmp;
        } 
          if(box[i][0] > a)
              a = box[i][0]
            if(box[i][1] > b)              //큰수만 담은 변수에서 큰 수 만 추출
                b= box[i][1]
            console.log(box[i][0],box[i][1])
    } 
    
    return a*b
}

// function solution(sizes) {
//     let w = 0;
//     let h = 0;
//     sizes.forEach(s => {
//         const [a, b] = s.sort((a,b) => a-b);
//         if (a > h) h = a;
//         if (b > w) w = b;
//     });

//     return w * h;
// }  sort 와 arrow function 을 이용한 과정 
