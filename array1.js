var array = [1,2,3,4,5];

var newArray = array.map(function(x){ //uses an anonymous callback function to square each element
    return x * x;
});

console.log(newArray);
// logs [1,4,9,16,25]
