var count = 0;

var interval = setInterval(function(){
    count++;
    console.log(count);
},1000); //executes callback every second

/* Console Output:
   > 1   <-- after 1 second
   > 2   <-- after 2 seconds
   > 3   <-- after 3 seconds
   > 4   <-- after 4 seconds
     ... <-- interval continues until stopped
*/
