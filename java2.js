const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

const canvaswidth = canvas.width;
const canvasheight = canvas.height;
let ballx = canvasheight/2;
let bally = canvaswidth/2; 
let ballspeed = 1;
let balldirection = -1;

let paddle1 = {
  width:25,
  height:100,
  x:0,
  y:0
};

let paddle2 = {
  width:25,
  height:100,
  x:canvaswidth-25,
  y:0
};


//paddle banao
function makepaddle(){
  
  ctx.strokeStyle = "yellow";

  ctx.strokeRect(paddle1.x , paddle1.y , paddle1.width , paddle1.height);
  ctx.fillStyle = "yellow";
  ctx.fillRect(paddle1.x , paddle1.y , paddle1.width , paddle1.height);


  ctx.strokeRect(paddle2.x , paddle2.y , paddle2.width , paddle2.height);
  ctx.fillStyle = "red";
  ctx.fillRect(paddle2.x , paddle2.y , paddle2.width , paddle2.height);

};

//paddle ko move karao
document.addEventListener("keydown", function(event) {
  if (event.key === "W") { 
    paddle1.y -= 10;
    if(paddle1.y<0)paddle1.y = 0;
  }
  else if (event.key === "S") { 
    paddle1.y += 10;
    if(paddle1.y + paddle1.height>canvasheight)paddle1.y = canvasheight - paddle1.height;
  }
  else if (event.key === "A") { 
    paddle2.y -= 10;
    if(paddle2.y<0)paddle2.y = 0;
  }
  else if (event.key === "Z") {
    paddle2.y += 10;
    if(paddle2.y + paddle2.height>canvasheight)paddle2.y = canvasheight - paddle2.height;
  }
});

//ball banao
function drawball(){
  ctx.beginPath();
	ctx.fillStyle = "blue";
	ctx.arc(ballx , bally , 20 , 0, Math.PI * 2, true);
	ctx.fill();
  ctx.closePath();
};

// ball ko move karao aur dekho bhar toh nhi ja rhi
function draw(){
  drawball();
  ballx += balldirection*ballspeed;
  if(ballx<=0+20){
    alert("right player wins");
    window.location.reload();
    return;
  }
  if(ballx>=canvasheight-20){
    alert("left player wins");
    window.location.reload();
    return;
  }
  bally += balldirection*ballspeed;
  if(bally<=0+20 || bally>=canvaswidth-20)balldirection = -1*balldirection;

  if(ballx<=paddle1.x + paddle1.width + 20){
    if(bally>paddle1.y && bally<paddle1.y + paddle1.height){
      balldirection = -1*balldirection;
      ballspeed += 1;
    }
  }


  if(ballx>=paddle2.x - 20){
    if(bally>paddle2.y && bally<paddle2.y + paddle2.height){
      balldirection = -1*balldirection;
      ballspeed += 1;
    }
  }
  
  
};


function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  makepaddle();
  draw();
  window.requestAnimationFrame(update);
};

update();



