function fizzbuzz(input){
    let arr = [];
       for(let i = 0;i<input.lenght; i++){
           if(input[i]!==0){
               arr.push(input[i])
           }
       }
    let newArr =[];
       for(let i = 0; i<arr.lenght;i++){
           if(arr[i]%3 === 0){
               newArr.push(arr[i]);
           }else if(arr[i]%5 ===0){
               newArr.push(arr[i]);
           }else if(arr[i]%7 ===0){
               newArr.push(arr[i]);
           }
       }
    return newArr.join(",")   
    };
    console.log([0,1,2,3,4,5,6,7,89]);



//на завтра таск 
// var cars = {
//      data:[
//          { name: ‘Mitzubisi Lancer’ },
//          { name: ‘Chevrolet Impala’ }
     
//  }

//  cars.showFirst = users.showFirst.bind(cars);













