process.stdin.setEncoding('utf8');

process.stdin.on('data', data => {
    let d = data.split(' ');
    solution(+d[0], +d[1]);
});

function solution(n, m) {
    // n = 5(가로길이), m = 3(세로길이)
    let str = "";
    for(let i = 0; i < m; i++) {
        str = "";
        
        for(let j = 0; j < n; j++) {
            str += '*';
        }
        
        console.log(str);
    }
    

    
    // i=0(j=0,1,2,3,4) => i=1(j=0,1,2,3,4) => i=2(j=0,1,2,3,4)

    return ;
} //2중 for 문 기억 .   아래가 먼저 ㄷ ㅏ돌고 위로 다시 돈다 !! 