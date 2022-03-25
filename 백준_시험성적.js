
function Grade(a){ 
    if(90<= a & a <=100){
        return 'A'
    }else if(80<= a & a <= 89){
        return 'B'
    }else if(70 <= a & a <= 79){
        return 'C'
    }else if(60 <= a & a <= 69){
        return 'D'
    }else {
        return 'F'
    }
}
console.log(Grade(89))