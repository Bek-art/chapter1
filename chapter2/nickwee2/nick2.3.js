function hour(sec){
    if(typeof sec == 'number'){
        sec = sec * 3600;
        console.log(sec);
    } else{
        console.log('введите число!')
    }
}
hour(3);