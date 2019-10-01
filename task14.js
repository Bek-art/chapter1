function result (radius){
    let circle = {
        square : function (){
            return Math.PI * Math.pow(radius, 2)
        },
        length : function (){
            return Math.PI * 2 * radius;
        }
    };
    return [circle.square(),circle.length()];
}
 
let answer = result (100);
console.log (answer);

    ﻿