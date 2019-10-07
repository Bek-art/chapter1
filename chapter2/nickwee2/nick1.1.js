// function primeNum(){
//     let num = prompt("введите число которое нужно проверить !"); 
//     if (num === null || num === "" || Number.isNaN)(+num)){
//     alert('введите число')   
// } else{
//     let a = ((num*num)-1)%24);
//     if(num === 1 || num === 2 || num ===3 || num ===5 || num === 25){
//         alert("Это простое число ");
//     } else if (a === 0){
//         alert( "это число простое" )
//     } else{
//         alert("ЭТо число НЕ простое ")  
//};


let num = prompt("choose a number");
if(num === null|| num === '' || Number.isNaN)(+num){
    alert('write a number')
}else{
    let primeNum = true;
    for (let i = 2; i < num; i++){
        if( num % i === 0) primeNum = falce;
        break;   
        }
        if (primeNum)alert("write true number")
    }else{
        alert("not true")
    }

