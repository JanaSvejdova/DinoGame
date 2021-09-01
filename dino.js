var chara = document.getElementById("chara");
var block = document.getElementById("block");
function jump (){
    if(chara.classList != "animate") {
        chara.classList.add("animate");
    }
setInterval(function() {
        chara.classList.remove("animate");
    },500);}

var checkDead = setInterval ( function() {
  var charaTop = 
   parseInt(window.getComputedStyle(chara).getPropertyValue("top"));


    var blockLeft= 
     parseInt(window.getComputedStyle(block).getPropertyValue("left"));
     if(blockLeft<20 && blockLeft>0 && charaTop>=130) {
         block.style.Animation = "none";
         block.style.display = "none";
         alert("u lose");}
        },10); 
