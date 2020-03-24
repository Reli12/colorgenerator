//pozadina 
var cs=document.getElementById("hh3");
var boja1=document.getElementById("b1");
var boja2=document.getElementById("b2");
var body=document.getElementById("gradijent");
function setGradient(){   
body.style.background="linear-gradient(to right,"+boja1.value+","+boja2.value+")";

}
boja1.addEventListener("input",setGradient);
boja2.addEventListener("input",setGradient);
//ostatak stranice

var gumb=document.getElementById("gumb");
var input=document.getElementById("Input");
var ul=document.getElementById("ule");
function inpulength(){
    return input.value.length;
}
function dodajelementgumb(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}
function dodajelemenenter(event){
       dodajelementgumb();
}
gumb.addEventListener("click",function(){
     if (input.value.length>0){
      dodajelementgumb();
    }
});
input.addEventListener("keypress",function(event){
    if (input.value.length>0 && event.keyCode===13){
     dodajelemenenter();
   }
});
