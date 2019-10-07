// Страна, Город, индекс(6), улица, номер дома, опционально номер
// квартиры.

let regExp1 = /^[a-zа-я]+\,\s?[a-zа-я]+\,\s?\(\d{6}\)\,\s?[a-zа-я]+\,\s?\d+(\/\d+)?$/gi;
let str1 = "Кыргызстан,Бишкек,(000000),Бакаева,1/50";

function fn(regExp, str){
    return regExp.test(str);
}
console.log(fn(regExp1, str1));