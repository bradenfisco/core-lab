var clickMeButton =
document.querySelector(".example");

clickMeButton.addEventListener("click", function(){
  
 document.body.classList.toggle("darkmode"); 
})

var clickMeButton = document.querySelector(".example");


var clickCircle = document.querySelector(".circle");
var checkPicture = document.querySelector(".check")

clickCircle.addEventListener("click", function(){
  checkPicture.classList.toggle("appear");
  
})