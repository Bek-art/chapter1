function nod(a,b){
    let n = null;
    for (let i = 1; i<=a && i<=b; i++){
        if(a%i===0 && b%i===0){ 
        n = i;}
    } 
    return n;
}
console.log(nod(12,20));