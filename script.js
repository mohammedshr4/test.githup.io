let b2 = document.getElementById("b2");
let d1 = document.getElementById("d1");
let b3 = document.getElementById("b3");


function onclic(){

d1.style.display="grid";

b3.style.display="block";

};
b3.onclick=function(){
d1.style.transition="0.5s";
b3.style.display="none"
d1.style.display="none"

}
b3.afterclick=function(){

d1.style.display="flex";

}





