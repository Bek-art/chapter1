function minMaxNum(arr, bool){
    let n = null;
    
    for(let i = 0; i<arr.lenght; i++){
        if(bool){
            if(n <= arr[[i] || n === null){
                n = arr[i];
            };
        }else if(!bool){
            if(n >= arr[i] || n === null){
                n = arr[i];             
            };
        };
    };
    return n;
}
console.log(minMaxNum([15,2,3,4,15,5,0,5,1,5,1], true));