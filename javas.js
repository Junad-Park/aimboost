var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// canvas 최대,최소 크기
var max_x = 610,
	min_x = 30,	
	min_y = 30,
	max_y = 466;

// 원 시작지점, 반지름, 원 모양을 결정하는 변수들
var x = 200,
	y = 200,
 	r = 1,
 	startAngle = 0,
 	endAngle =  Math.PI*2;

var moving;

var inc = true;

let balls=[]

// -------------------------------------------------------------------

// 공의 위치,움직임을 control하는 클래스
class Ball {
	constructor(){
		this.x = Math.random()*canvas.width
		this.y = Math.random()*canvas.height
		this.r = 1;
		this.c = "orange";
		this.speed=1;
	}
	draw(){
		context.beginPath();
		context.arc(this.x,this.y,this.r,startAngle, endAngle);
		context.fillStyle = "orange";
		context.fill();
		context.stroke();
	}

	grow(){
	if(inc){
		this.r+=this.speed;	
		console.log("up"+this.r+"");
	}else{
		this.r-=this.speed;
		console.log("down"+this.r+"");
	}
	}
	
	rad_check(){
	if(this.r>=30){
		inc = false;
		console.log(inc);

		}
	if(this.r<=2){
		inc = true;
		console.log(inc);
		}
	}
}
// ---------------------------------------------------------------------------

function creatballs(){
	for(let i=0; i<50;i++){
		balls.push(new Ball)
	}
}

creatballs();

function drawballs(){
	for(let i=0; i<50;i++){
		balls[i].draw();
		balls[i].rad_check();
		balls[i].grow();
		
	}
}

setInterval(() => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawballs()
}, 50)



/*
class Drawing{
	constructor(x,y,r,startAngle, endAngle){
		this.x = x;
		this.y = y;
		this.r = r;
		this.startAngle = startAngle;
		this.endAngle = endAngle;
	}
	
	function CircleForm(){
		var canvas = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');
		context.beginPath();
		context.arc(this.x,this.y,this.r,this.startAngle, this.endAngle);
		context.fillStyle = "orange";
		context.fill();
		context.stroke();
	}
	
	function draw(){
		context.clearRect(0,0,canvas.width,canvas.height); // canvas 지우기 코드
		CircleForm(this.x,this.y,this.r,this.startAngle, this.endAngle);
		rad_check(this.r);
		ball.moving_size();
	}	
}
*/
	

// canvas에서 마우스 클릭시 함수를 발동시키는 코드
canvas.addEventListener('mousedown', function(e) {
    getCursorPosition(canvas, e)}
);

// 클릭시 마우스 위치 알려주는 함수
function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const xpos = event.clientX - rect.left
    const ypos = event.clientY - rect.top
    console.log("x: " + xpos + " y: " + ypos);
	judgeHit(xpos,ypos);
	//alert(1);
	
}

// 원 클릭시 이벤트를 발생시키는 함수
function judgeHit(xpos, ypos,moving){
	if(Math.abs(x-xpos)<=r && Math.abs(y-ypos)<=r){
		macroBall();
	}
}






/*
//1밀리초마다 공을 움직이는 코드
function moveBall(){
	moving = setInterval(draw, 1);
}
//공을 멈추는 코드
function stopBall(){
	clearInterval(moving);
}
//공의 위치를 조정하는 코드
function positionBall(){
	x = Math.floor( ( Math.random() * (max_x - min_x))),
	y = Math.floor( ( Math.random() * (max_y - min_y)));
}
*/