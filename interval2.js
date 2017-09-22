var count = 0;

var interval = setInterval(function(){
    count++;
    console.log(count);
    if(count >= 3){
        clearInterval(interval); //clears the interval after it is called 3 times
    }
},1000); //executes callback every second

/*Console Output
  >1  <--after 1 second
  >2  <--after 2 seconds
  >3  <--after 3 seconds
*/
