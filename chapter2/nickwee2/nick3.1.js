function gcd(a,b){
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a){let temp = a; a = b;b = temp;}
    while(true){
        if(b == 0) return a;
        a %= b;
        if(a == 0) return b;
        b %= a;
    };
};
    console.log(gcd(18,12));


    