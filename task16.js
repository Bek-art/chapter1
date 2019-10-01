
//  let sum = 0 {
//      for(let i = 0; i <= 100; i++)
//      sum = sum+i;
//  }
//  console.log(sum);


// // let mult = 1;
//     for(let i = 1; i <= 5; i++){
//         mult = mult + i;

//     }
    // console.log(mult);

    // var filtered = array.filter(function (element) {
    //     var result = (element > 2);
    //     return result;
    // });
    // console.log(filtered);
    // console.log(array);
// метод слайс 
//     let arr = [1,2,3,4,5];
//     let r = arr.slice(1);
    
//     console.log(r);

// var array = [1,2,3,4,5];
// var reducedValue = array.reduce( function (acc , element, ) {
//     return acc + element;

// })
// console.log(reducedValue);


// function getDivisorsCount(n){
//     let count = 0;
//     for(let i = 1;i <= n; i++){
//         if(n % i == 0) count++;
//     }
//         return count;
// } 
// console.clear();

// console.log(getDivisorsCount(1) === 1);

// console.log(getDivisorsCount(3) === 2);

// console.log(getDivisorsCount(6) === 4);

// console.log(getDivisorsCount(20) === 6);



// let arr = [1, 2];

// // создать массив из: arr и [3,4]
// let arr.concat [3, 4]; // 1,2,3,4

// // создать массив из: arr и [3,4] и [5,6]
// let arr.concat [3, 4], [5, 6]; // 1,2,3,4,5,6

// // создать массив из: arr и [3,4], потом добавить значения 5 и 6
// let arr.concat [3, 4], 5, 6; // 1,2,3,4,5,6
// console.log()



let arr = [2,4,33,24,57]
var max_of_array = Math.max.apply(Math, arr);
var min_of_array = Math.min.apply(Math, arr);
var index_of_max = arr.indexOf(max_of_array);
var index_of_min = arr.indexOf(min_of_array);

if(index_of_max > -1){
    arr.splice(index_of_max, 1);
    console.log("minimum:" + eval(arr.join("+"))) 
}    

arr = [2,4,33,24,57];
if(index_of_min > -1){
    arr.splice(index_of_min, 1);
    console.log("maximum:" + eval(arr.join("+")));
}
