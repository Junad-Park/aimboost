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

// 원 이동속도
var dx=1,
	dy=1;

var moving;

var inc = true;
// -------------------------------------------------------------------

// 공의 위치,움직임을 control하는 클래스
class Ball {
		move(){
		moving = setInterval(draw, 1);
	}
		stop(){
		clearInterval(moving);
	}
		position(){
			x = Math.random() * ((max_x) - (min_x))+min_x;	
			y = Math.random() * ((max_y) - (min_y))+min_y;
			console.log("x: "+x+"");
			console.log("y: "+y+"");
	}
		
		first_size(){
			r = 1;
	}	
	
		moving_size(){
		var size_fast = 0.09; //0.09
		if(inc){
			r+=size_fast;	
		}else{
			r-=size_fast;
		}
	}
}

let ball = new Ball();
// ---------------------------------------------------------------------------

function macroBall(){
	ball.stop();
	ball.position();
	ball.first_size();
	ball.move();
}

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
	context.clearRect(0,0,canvas.width,canvas.height); // canvas 지우기 코드
	CircleForm(x,y,r,startAngle, endAngle);
	rad_check(r);
	ball.moving_size();
}

// 원 반지름 체크하는 함수
function rad_check(r){
	if(r>=30){
		inc = false;
	}
	if(r<=2){
		inc = true;
	}

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
	//alert(1);
	
}

// 원 클릭시 이벤트를 발생시키는 함수
function judgeHit(xpos, ypos,moving){
	if(Math.abs(x-xpos)<=r && Math.abs(y-ypos)<=r){
		macroBall();
	}
}

ball.move();





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