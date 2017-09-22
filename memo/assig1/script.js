var tiempo = document.getElementById("timy");
bandera=false; 
var record=document.getElementById("record"); 
document.onkeypress = handle;
var i; 
var s=0;
var c;
function handle(event){
    var keyPressed= event.key; 
if(keyPressed=='s'){startStop();}
if(keyPressed=='r'){resetea();}
if(keyPressed=='t'){rec();}
} 

function startStop(){

if(!bandera){
bandera=true;
taim();
	}else{
clearInterval(i);
bandera=false;


	}


}

function resetea(){
tiempo.innerHTML= 0;
clearInterval(i);
bandera=false;  
s=0;}


function rec(){
c=tempo(); 

	record.innerHTML+="<br>"+c.toFixed(2);
}

function taim(){
i = setInterval(tempo, 10);

}
function tempo(){
s += 0.01;
    tiempo.innerHTML = s.toFixed(2);
    return s;

}
