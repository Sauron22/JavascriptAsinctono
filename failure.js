var promise = new Promise(function(resolve,reject){


});
promise.then(function(val){//success callback

    console.log(val);

},function(val){//rejection callback

    console.log(val); 

})
