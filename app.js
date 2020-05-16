var classLength=document.querySelectorAll(".drum").length;

// Detecting button press
for(var i=0;i<classLength;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){  //anonymous function you may or may not give it a name//

    var buttonInnerHTML=this.innerHTML;
    makesound(buttonInnerHTML); //this will take place when we press buttons w,a,s,d etc of the drums
    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting key press
  document.addEventListener("keydown",function(event)
{
  makesound(event.key); //this happens when we press keys w,a s,d etc on the keyboard
  buttonAnimation(event.key);
});

  function makesound(key){
    switch(key){
      case "w":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

      case "a":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

      case "s":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

      case "d":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

      case "j":
      var crash=new Audio("sounds/crash.mp3");
      crash.play();
      break;

      case "k":
      var kick=new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

      case "l":
      var snare=new Audio("sounds/snare.mp3");
      snare.play();
      break;

      default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(keyselected){  //for highlighting a particular drum
   var currentkey= document.querySelector("."+keyselected); //refers to class here like .w,.a, .s etc
   currentkey.classList.add("pressed"); //adds features of class pressed

   setTimeout(function(){ //it will remove the feature after 100 milliseconds i.e 0.1 sec
     currentkey.classList.remove("pressed");
   }, 100);
}
