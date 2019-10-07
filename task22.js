var array1 = [16,0,2,3,1];
    var array2 = [3,5,6,7,8,13];
    var array3 = [];

    if (array1.length >= array2.length)
    {
        array3 = array1.map(function(num, i, array) {
          return num + (array2[i] || 0);
        });
    }else{
        array3 = array2.map(function(num, i, array) {
          return num + (array1[i] || 0);
        });
    }
console.log(array3);