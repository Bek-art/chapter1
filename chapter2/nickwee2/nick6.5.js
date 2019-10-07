let regExp1 = /^[А-Яа-я]+\s[А-Яа-я]+\s[А-Яа-я]+$/g;
let str1 = "Алиев Бексултан Алиевич";

function fn(regExp, str){
    return regExp.test(str);
}
console.log(fn(regExp1, str1));