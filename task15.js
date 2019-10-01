var sub_String = function(str) {
  var subset = [];
  for (var m = 0; m <str.length; m++){ 
    for (var n = m+1; n<str.length+1; n++){
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};

console.log(sub_String(20));
