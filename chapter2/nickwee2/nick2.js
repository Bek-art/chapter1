function num(n){
    if(typeof n === "number"){
        let arrNum = [];
        if(n < 0){
            for(let i = 1;i != n - 1; i--){
               arrNum.push(i);
            }
        } else {for(let i = 1;i <= n; i++){
               arrNum.push(i);
            }
        }
       return arrNum.join();
    }else return NaN;
}
num(-3);
console.log(num(4))







