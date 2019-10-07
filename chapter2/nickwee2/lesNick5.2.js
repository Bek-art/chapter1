// function palindrome(str){
//     var re = /[W_]/g;
//     var lowRegStr = str.toLowerCase().replace(re, "");
//     var reverseStr = lowRegStr.split("").reverse().join("");
//     return reverseStr === lowRegStr; 
// }
// palindrome("A man, a plan, a canal. Panama");



// function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return false;
          
//         }
//     }
//     return true;
// }
// palindrome("A man, a plan, a canal. Panama");





// function poli(str){
//     let arr = []
//         for(let i = 0; i < str.lenght; i++){
//             arr.push(str[i]);
//         };
//     if(arr.reverse().join("") === str){
//         console.log('it\'s Poli')
//     }else{
//         console.log('it\'s not Poli')
//     }
// }

// poli("madam")




function poli(str){
    console.log(str.split('').reverse().join('') === str ? "true" : "false");
}

poli("madam")