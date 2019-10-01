// function main(){
//     const n = parseInt(readline(), 10 );
//     const s = readline()
    
//     for(int i = 0; i < s.length(); i++){
//         if(s.charAt(i) == 'U'){
//             level++;
//         }else if(s.charAt(i) == 'D'){
//             if(level == 0){
//                 valleys++;
//             }
//             level--;
//         }
// }



function countingValley(n, s) {
    let sArr = [];
    for(let i = 0; i< n; i++){
        sArr.push(s[i])
    }[]
    

    let height = null;
    let valley = 0;  
    for(let i = 0; i < n; i++){
    
        if (sArr[i] == "U"){
            height+=1;
        }else if (sArr[i] == "D"){
            height-=1;
        }else{
            return "ERROR"
        }
        if(height == 0 && sArr[i] =="U"){
            valley+=1;
        }
    }
    return valley;   
};
console.log(countingValley(10,"UDUUUUDUDDD");) 