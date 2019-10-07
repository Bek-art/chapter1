//  function factorialNum(){ "eto bylo v proshlov""
//      let a = 1;
//      let b = 1;
//      let num = prompt("Введите число которое нужно");
//      if(Number.isNaN(+num)){
//          alert("введите число ")
//      }else{
//          if(num%1 !== 0 || num < 0){
//              alert("введите число не дробное и положительное число ");
//          }else if (num>=12){
//              alert("Извините ваше число слишком большое");
//          }else{
//              for (var i=0; i < num; i++){
//                  a=a*b;
//                  b++;
//              };
//              alert(a);  
//          }  
//        };
//  };



 //nick1.3
    //  let x = +prompt("enter the number"));
    //  if(x > 0){
    //      console.log("possitive")
    //  }else if(x < 0){
    //      console.log("negative")
    //  }


//taskNick1.2
//  let num = 2.2;
 
//  if(num % 1 === 0) {
//      console.log("Целое число!");
//  } else {
//      console.log("Дробное число!");
//  }






var y = +prompt("введите число ");
if(y < 0 || y % 1 !== 0){
    alert("число не определено ")
}else if ( y === 0){
    alert(1)
}else if( y >= 12){
    alert("число слишком большое")
}else{
    var result = 1;
    for( var i = 1;i <= y; i++)
    result = result * i
    }
    alert(result);
}













