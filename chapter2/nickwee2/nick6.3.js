function validator (str) {
    let reg = /^[a-z0-9]+[a-z0-9\-\.\_]*\@[a-z0-9]+[a-z0-9\-\.\_]*\.[a-z0-9]{1,3}/
    return reg.test(str) ? str : "введите правильно!"
}
console.log(validator('beks.aliev2016@gmail.com'))