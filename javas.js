var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// canvas 최대,최소 크기
var max_x = 620,	
	min_x = 20,	
	min_y = 20,
	max_y = 470;

// 원 시작지점, 반지름, 원 모양을 결정하는 변수들
var x = 20,
	y = 477,
 	r = 20,
 	startAngle = 0,
 	endAngle =  Math.PI*2;

// 원 이동속도
var dx = 0.1,
	dy = 0.1;


//원을 생성, 디자인하는 함수
function CircleForm(x,y,r,startAngle, endAngle){
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
context.beginPath();
context.arc(x,y,r,startAngle, endAngle);
context.fillStyle = "orange";
context.fill();
context.stroke();
}

// 원을 지웠다 다시그리는 함수
function draw(){
	if(y<min_y){
		y = max_y
	};
	if(x>max_x){
		x = min_x
	};
	context.clearRect(0,0,canvas.width,canvas.height); // canvas 지우기 코드
	var circle = CircleForm(x,y,r,startAngle, endAngle);
	x += dx;
	y -= dy;
}

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
	
}

// 원 클릭시 이벤트를 발생시키는 함수
function judgeHit(xpos, ypos){
	if(Math.abs(x-xpos)<=r && Math.abs(y-ypos)<=r){
		alert("Hit!!");}
}



//10 밀리초마다 draw함수를 실행시키는 코드
setInterval(draw, 10);


//https://codepen.io/DanielTate/pen/NGLRGg?editors=0010