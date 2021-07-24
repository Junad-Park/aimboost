var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// canvas 최대,최소 크기
var max_x = 620,
	min_x = 20,	
	min_y = 20,
	max_y = 470;

// 원 시작지점, 반지름, 원 모양을 결정하는 변수들
var x = 50,
	y = 207,
 	r = 20,
 	startAngle = 0,
 	endAngle =  Math.PI*2;

// 원 이동속도
var dx=1,
	dy=1;

var moving;

// 공의 위치,움직임을 control하는 클래스
class Ball {
		move(){
		moving = setInterval(draw, 1);
	}
		stop(){
		clearInterval(moving);
	}
		position(){
		var x_temp = x,
		    y_temp = y;
		console.log("x_temp: "+x_temp+" y_temp: "+y_temp+"");
		if(x_temp<=max_x/2){
			x = Math.floor( ( Math.random() * (max_x - max_x/2)))
		}else{
			x = Math.floor( ( Math.random() * (max_x/2 - min_x)))
		};
		if(y_temp<=max_y/2){
			y = Math.floor( ( Math.random() * (max_y - max_y/2)))
		}else{
			y = Math.floor( ( Math.random() * (max_y/2 - min_y)))
		};
		
	}
		speed(){
		
		var rand = Math.floor( ( Math.random() * ( 10 - 1 )+1));
		var speed_rand = ( Math.random()+0.5);
		console.log(speed_rand);
		if(rand%2==0){
			dx = speed_rand
		}else{
			dx = -speed_rand
		};
			
		var rand = Math.floor( ( Math.random() * ( 10 - 1 )+1));
		if(rand%2==0){
			dy = speed_rand
		}else{
			dy = -speed_rand
		};
	}
		
		size(){
			
	}
			
		draw1(){
			draw1();
		}
	
}

let ball = new Ball();

function macroBall(){
	ball.stop();
	ball.position();
	console.log("xpos: "+x+" ypos: "+y+"");
	ball.speed();
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
	if(x<min_x||x>max_x || y<min_y||y>max_y){
		macroBall();
	}else{
		x += dx;
		y -= dy;
	}
	

}
function draw1(){
	CircleForm(x,y,r,startAngle, endAngle);
	if(x<min_x||x>max_x || y<min_y||y>max_y){
		macroBall();
		
	}else{
		x += dx;
		y -= dy;
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