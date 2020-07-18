// Detecting button clicked

var noOfDrums=document.querySelectorAll(".drum").length; //quering all selected elements with class drum
for(var i =0;i<noOfDrums;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){ // calling addEventListener method
                                                                            // which takes event and function as param
                                // this is identity of button(object) which triggered this event
    var buttonText=this.innerHTML; //to access innerHTML or content of elemnt
    makeSound(buttonText);
    createAnimation(buttonText);

  });
}

// Detecting keyboard pressed

//keydown is same as keypress
document.addEventListener("keydown",function(event){ //when keypress or keydpwn detected trigger this function
  makeSound(event.key); //event is triggered on keypress and using key property of it to check for key
createAnimation(event.key);

});

function makeSound(key){
  switch (key) {
    case "w":
      var audio=new Audio("sounds/tom-1.mp3"); //create new audio object
      audio.play();
      break;

    case "a":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "k":
      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
      console.log(key)
  }
}

function createAnimation(key){
  var activeKey=document.querySelector("."+key);
  activeKey.classList.add("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed");
  },100);

}
