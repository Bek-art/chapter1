function hour(min){
    if(typeof min === 'number' && min >= 0 && min <= 59 ){
        if( min <= 15){
           return'1 quater';
        } else if (min >= 15 && min <= 30){
           return '2 quater';
        } else if (min >= 31 && min <= 45){
           return'3 quater';
        } else {
           return '4 quater';
        }
    } else return 'this is not a number';

}
console.log(hour(0));
