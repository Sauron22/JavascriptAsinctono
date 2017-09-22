function myFunction(x,callback){
    callback(x);
}

var answer = 0;

myFunction(10,function(x){ //callback1
    var result = x * x; //result = 100

    myFunction(result, function(x){ //callback2 within callback 1
        var result2 = x + x; //result2 = 200

        myFunction(result2, function(x){ //callback 3 within callback 2
            answer = x + 100;
            console.log(answer); // logs 300
        })
    })
});
