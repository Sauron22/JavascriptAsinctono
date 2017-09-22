document.onkeypress = handleKeyPress;

function handleKeyPress(event){
    var keyPressed= event.key; //event.key contains the key that was pressed
    document.getElementById("parra").innerHTML = "Key Pressed: " +  keyPressed;
    //sets the HTML text to display the key pressed
} 
