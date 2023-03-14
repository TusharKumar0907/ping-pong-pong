const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

const canvaswidth = canvas.width;
const canvasheight = canvas.height;

let paddle1 = {
  width:25,
  height:100,
  x:0,
  y:0
}

let paddle2 = {
  width:25,
  height:100,
  x:canvaswidth-25,
  y:canvasheight-100
}

function makepaddle(){
  
  ctx.strokeStyle = "yellow";

  ctx.strokeRect(paddle1.x , paddle1.y , paddle1.width , paddle1.height);
  ctx.fillStyle = "yellow";
  ctx.fillRect(paddle1.x , paddle1.y , paddle1.width , paddle1.height);


  ctx.strokeRect(paddle2.x , paddle2.y , paddle2.width , paddle2.height);
  ctx.fillStyle = "red";
  ctx.fillRect(paddle2.x , paddle2.y , paddle2.width , paddle2.height);

};



function drawball(){
	ctx.fillStyle = "blue";
	ctx.arc(canvasheight/2 , canvaswidth/2 , 20 , 0, Math.PI * 2, true);
	ctx.fill();
};

makepaddle();
drawball();
