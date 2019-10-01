function(){
    console.log('hello world');
})()


var counter= function(){
    var count = 0;
    var add =function(){
        count = count+1;
        return count;
    }
    return add;
}
var add1= counter();
for(var i = 0; i< 10; i++);
 console.log(add1());
}



var arr=['black','blue','green']
for(var i = 0; i<arr.length;i++){
    console.log(arr[i]);
}
var arr=['black','blue','green']

for(var i = 0;i<arr.length;i++){
    console.log(arr[i]);
}
var fn = function(){
console.log(arguments);
}
fn(1,2,3,4,5)