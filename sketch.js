var hamH = 2;
var larH = 2;
var larX = 100;
var hamX = 500;
var pressedKeys = [];
var hamScore = 0;
var larScore = 0;
function setup() {
  createCanvas(800, 400);
  hamup = loadImage('ham-up.png'); // Load the image
  hammid = loadImage('ham-mid.png'); // Load the image
  hamdown = loadImage('ham-down.png'); // Load the image
  larup = loadImage('lar-up.png'); // Load the image
  larmid = loadImage('lar-mid.png'); // Load the image
  lardown = loadImage('lar-down.png'); // Load the image
  back = loadImage('back.jpg'); // Load the image
}

function draw() {
  if(pressedKeys[38]){
    hamH=1;
  }
  else if(pressedKeys[40]){
    hamH=3;
  } else{
    hamH = 2;
  }
  if(pressedKeys[37]&&((hamX-larX)>100||hamH!=larH)){
    hamX-=10;
    if((hamX-larX)<80){
      larScore++;
      larX = 100;
      hamX = 500;
    }
  }
  if(pressedKeys[39]&&hamX<width-300){
    hamX+=10;
  }

  if(pressedKeys[87]){
    larH=1;
  }
  else if(pressedKeys[83]){
    larH=3;
  } else{
    larH=2;
  }
  if(pressedKeys[65]&&larX>0){
    larX-=10;
  }
  if(pressedKeys[68]&&((hamX-larX)>100||hamH!=larH)){
    larX+=10;
    if((hamX-larX)<80){
      hamScore++;
      larX = 100;
      hamX = 500;
    }
  }
  image(back, 0, 0, width, height);
  fill(255);
  textSize(65);
  textAlign(LEFT)
  text(hamScore,5,60);
  textAlign(RIGHT)
  text(larScore,760,60);
  // Displays the image at point (0, height/2) at half size
  if(hamH==1){
    ham=hamup;
  }
  if(hamH==2){
    ham=hammid;
  }
  if(hamH==3){
    ham=hamdown;
  }
  image(ham, hamX, height-300, 300, 300);
  if(larH==1){
    lar=larup;
  }
  if(larH==2){
    lar=larmid;
  }
  if(larH==3){
    lar=lardown;
  }
  image(lar, larX, height-300, 300, 300);
  print(hamX-larX);
}

keyPressed = function() {
    pressedKeys[keyCode] = true;
};
keyReleased = function() {
    pressedKeys[keyCode] = false;
};
