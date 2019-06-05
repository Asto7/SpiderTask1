var result;
 
 window.addEventListener('load',loading);



document.getElementById('playagain').addEventListener('click',start);
// function reload()


// }

function start(){
	
	
	document.getElementById('playagain').style.visibility='hidden';
window.location.href='index.html';
}
function loading(){
	var HIGHSCORE=+sessionStorage.getItem('HIGH');
var background=new Audio('Background.mp3');
var heart=new Audio('heart.mp3');
var spike=new Audio('spike.mp3');
var dead=new Audio('dead.wav');
var blast=new Audio('blast.mp3');	
var pause=new Audio('pause.wav');
var clear=new Audio('clear.wav');
getObstacle = function(code, dy, initialY) {
		switch(code){
			case 'SC': //Square Center
			return(new SquareC(dy, initialY));
			break;

			case 'SCD': //Square Center Moving Down
			return(new SquareCDown(dy, initialY));
			break;

			case 'SCR': //Square Center Moving Right
			return(new SquareCRight(dy, initialY));
			break;

			case 'SCL': //Square Center Moving Left
			return(new SquareCLeft(dy, initialY));
			break;

			case 'RUL': //Rectangle Upright Left
			return(new RectangleUprightL(dy, initialY));
			break;

			case 'RUR': //Rectangle Upright Right
			return(new RectangleUprightR(dy, initialY));
			break;

			case 'RHC': //Rectangle Horizontal Center
			return(new RectangleHorzC(dy, initialY));
			break;

			case 'RHCD': //Rectangle Horizontal Center Moving Down
			return(new RectangleHorzCDown(dy, initialY));
			break;
 
			case 'RHCR': //Rectangle Horizontal Center Moving Right
			return(new RectangleHorzCRight(dy, initialY));
			break;

			case 'RHCL': //Rectangle Horizontal Center Moving Left
			return(new RectangleHorzCLeft(dy, initialY));
			break;

			case 'RHL': //Rectangle Horizontal Left
			return(new RectangleHorzL(dy, initialY));
			break;

			case 'RHR': //Rectangle Horizontal Right
			return(new RectangleHorzR(dy, initialY));
			break;

			case 'RHLR': //Rectangle Horizontal Left Moving Right
			return(new RectangleHorzLRight(dy, initialY));
			break;

			case 'RHRL': //Rectangle Horizontal Right Moving Left
			return(new RectangleHorzRLeft(dy, initialY));
			break;

			case 'RHRD': //Rectangle Horizontal Right Moving Down
			return(new RectangleHorzRDown(dy, initialY));
			break;

			case 'RHLD': //Rectangle Horizontal Left Moving Down
			return(new RectangleHorzLDown(dy, initialY));
			break;
		}
	}	






















var level = [

	{"OBS": [{"code": "SC", "IY": -100},
	{"code": "RUL", "IY": -500},
	{"code": "RUR", "IY": -800},
	{"code": "RHL", "IY": -1200},
	{"code": "RHL", "IY": -1500},
	{"code": "RHL", "IY": -1900},
	{"code": "RHR", "IY": -2200},
	{"code": "RHL", "IY": -2500},
	{"code": "RHR", "IY": -2900},
	{"code": "RHL", "IY": -3300},
	{"code": "RHR", "IY": -3600},
	{"code": "RHC", "IY": -3900}
], 
		"SPD" : 3,
		"TITLE"	: "First Chapter",
		"MSG" :"Lock ND Loaded!!!:)",
	},

	{"OBS": [ 			
					
					{"code": "SC", "IY": -100},
					{"code": "RUL", "IY": -400},
					{"code": "RUR", "IY": -600},
					{"code": "RHL", "IY": -800},
					{"code": "RHL", "IY": -1000},
					{"code": "RHL", "IY": -1200},
					{"code": "RHR", "IY": -1400},
					{"code": "RHL", "IY": -1600},
					{"code": "RHR", "IY": -1800},
					{"code": "RHL", "IY": -2000},
					{"code": "RHR", "IY": -2200},
					{"code": "RHC", "IY": -2400},
					{"code": "SC", "IY": -2600},
					{"code": "RUL", "IY": -3000},
					{"code": "RUR", "IY": -3200},
					{"code": "RHR", "IY": -3400},
					{"code": "RHR", "IY": -3600},
					{"code": "RHR", "IY": -3800},
					{"code": "RHR", "IY": -4000},
					{"code": "RHL", "IY": -4200},
					{"code": "RHR", "IY": -4400},
					{"code": "RHL", "IY": -4600},
					{"code": "RHR", "IY": -4800},
					{"code": "RHC", "IY": -5000}


					], 
		"SPD" : 3.7,
		"TITLE"	: "Chapter 2",
		"MSG" : "TIME TO ACT",
	},


	{"OBS": [ 




					{"code": "RUL" , "IY": -300},
					{"code": "RUR", "IY": -300},
					{"code": "RHCR", "IY": -600},
					{"code": "RHCL", "IY": -900},
					{"code": "RHCL", "IY": -1100},
					{"code": "RHR", "IY": -1300},
					{"code": "RHL", "IY": -1600},
					{"code": "RHR", "IY": -1900},
					{"code": "RHL", "IY": -2200},
					{"code": "SC", "IY": -2600},
					{"code": "SCR", "IY": -2950},
					{"code": "SCL", "IY": -2950},
					{"code": "SC", "IY": -3300},
					{"code": "SCL", "IY": -3300}



					], 
		"SPD" : 4.4,
		"TITLE"	: "Chapter 3",
		"MSG" : "FOCUS",
	},


	{"OBS": [ 
		{"code": "RHRD" , "IY": -300},
		{"code": "RHCR", "IY": -600},
		{"code": "RHCR", "IY": -900},
		{"code": "RHCL", "IY": -1100},
		{"code": "RHCR", "IY": -1300},
		{"code": "RHC", "IY": -1300},
		{"code": "RHL", "IY": -1700},
		{"code": "RHLD", "IY": -2100},
		{"code": "RHL", "IY": -2200},
		{"code": "RHLD", "IY": -2700},
		{"code": "SC", "IY": -2600},
		{"code": "SCR", "IY": -2950},
		{"code": "SCL", "IY": -2950},
		{"code": "SC", "IY": -3400},
		
		{"code": "RHL", "IY": -3600},
		{"code": "RHR", "IY": -3750},
		{"code": "RHL", "IY": -4000},
		{"code": "RHR", "IY": -4200},
		{"code": "RHL", "IY": -4400},
		], 
		"SPD" : 5,
		"MSG" : "NEVER GIVE UP",

		"TITLE"	: "Chapter 4"
	},

	{
		"OBS": [ 
		{"code": "RUL" , "IY": -300},
						{"code": "RUR", "IY": -300},
						{"code": "RHCR", "IY": -600},
						{"code": "RHCL", "IY": -900},
						{"code": "RHCL", "IY": -1100},
						{"code": "SCR", "IY": -1300},
						{"code": "SCL", "IY": -1600},
						{"code": "RHR", "IY": -1900},
						{"code": "RHL", "IY": -2200},
						{"code": "RHRL", "IY": -2600},
						{"code": "SCR", "IY": -2950},
						{"code": "SCL", "IY": -2950},
						{"code": "SCR", "IY": -3400},
						{"code": "RUR", "IY": -3600},
						{"code": "RUL", "IY": -3600}
						

		],
		"SPD" : 5.4,
		"TITLE"	: "Chapter 5",
		"MSG" : "CONTROL YOURSELF",
	},

	{
		"OBS": [ 
		{"code": "RUL" , "IY": -300},
						{"code": "RUR", "IY": -600},
						{"code": "RHR", "IY": -900},
						{"code": "RHL", "IY": -1200},
						{"code": "RHR", "IY": -1500},
						{"code": "RHL", "IY": -1800},
						{"code": "SC", "IY": -2100},
						{"code": "RHCR", "IY": -2400},
						{"code": "SCR", "IY": -2700},
						{"code": "SCL", "IY": -3000},
						{"code": "SC", "IY": -3300},
						{"code": "RHCL", "IY": -3600},
						{"code": "RHCL", "IY": -3900},
						{"code": "SCL", "IY": -4200},
							{"code": "RHL", "IY": -4400},
						{"code": "RHR", "IY": -4650},
						{"code": "RHL", "IY": -4800},
						{"code": "RHR", "IY": -5090},
						{"code": "RHL", "IY": -5380},
						{"code": "RHR", "IY": -5670},
						{"code": "RHL", "IY": -5940},
						{"code": "RHL", "IY": -6210},
						{"code": "RHL", "IY": -6500},
						{"code": "RHL", "IY": -6790},
						{"code": "RHL", "IY": -7080},
						{"code": "RHR", "IY": -7370},
						{"code": "RHR", "IY": -7660},
						{"code": "RHR", "IY": -7950},
						{"code": "RHL", "IY": -8240},
                      {"code": "RHLR", "IY": -8530},
						{"code": "RHRL", "IY": -8820},
						{"code": "RHLR", "IY": -9110},
		],
		"SPD" : 5.5,
		"TITLE"	: "Chapter 6",
		"MSG" : "TRUST YOUR INSTINCTS",
	}



]



var canvas=document.querySelector('canvas');
canvas.width=400;
canvas.height=window.innerHeight;
 c=canvas.getContext('2d');
 d=canvas.getContext('2d');
 var img= new Image();
 img.src='lit.jpg';
 var img1=new Image();
 img1.src='heart.jpg';

//  var RADIAN=0;
var Leveln=0;

var center=200;
var heightt=window.innerHeight-120;
  var ghumao=0;
  var seperation=10;
  var begining=1;
  var LIFE=5;
  var l=1;
//   c.save();
//   c.fillStyle='red';
//   c.fillRect(0,0,400,window.innerHeight);
c.restore();
   function KEYDOWN(event){

    if(event.keyCode==37){
		ghumao=-0.05;
background.play();
		
    }
     if(event.keyCode==39)
    {
        ghumao=0.05;
		background.play();

	}
    }
    function KEYUP(event){if(event.keyCode==37){
        ghumao=0;}
   if(event.keyCode==39)
    {  ghumao=0;
    }}
  window.addEventListener('keydown',KEYDOWN);
      window.addEventListener('keyup',KEYUP);
var toggle=0;

var keep={x:-100,y:-500,it:1,value:-100,it1:1};
var keep1={x:-100,y:-500,it1:1,value:-100};


class Circle {
    constructor(x, y,radius,color,radian) {
        this.x =center;
        this.y =heightt;
        this.radius = radius;
        this.power=false;
        this.color=color;
        this.radian=radian;
  
        this.distance=seperation;
        this.Draw = function() {

			c.beginPath();
		if(Leveln==1)
			this.radian=this.radian+ghumao*(Leveln+1)*0.5;
  else
  this.radian=this.radian+ghumao*(Leveln*0.6+1)*0.5;

           c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            
            c.fillStyle = this.color;
			c.fill();
			if(this.power)
			{
				c.save();
				c.strokeStyle='white';
				c.stroke();
				c.restore();

			}
			



          

		};
        this.updat = function() {
			this.distance=seperation;
		if(Leveln<=5&&seperation>=100){	
			
			window.addEventListener('keydown',KEYDOWN);
      window.addEventListener('keyup',KEYUP);
if(keep.it==1)
{			for(var j=0;j<2;j++)
			{
	 var velx=CircleArray[j].distance*ghumao*Math.cos(Math.atan2(CircleArray[j].distance*Math.cos(CircleArray[j].radian),CircleArray[j].distance*Math.sin(CircleArray[j].radian)));
	 var vely=CircleArray[j].distance*ghumao*Math.sin(Math.atan2(CircleArray[j].distance*Math.cos(CircleArray[j].radian),CircleArray[j].distance*Math.sin(CircleArray[j].radian)));
			 
		 velx=(velx);
		 vely=(vely);
	 

			 
			 if((keep.x<CircleArray[j].x+CircleArray[j].radius-velx&&keep.x+60>CircleArray[j].x-CircleArray[j].radius+velx)&&
			 
			 (keep.y-target[keep.value].dy<CircleArray[j].y+CircleArray[j].radius-vely&&keep.y-target[keep.value].dy+60>CircleArray[j].y-CircleArray[j].radius+vely))
		 {
	 
keep.it=0;
seperation+=3;
CircleArray[j].power=true;
heightt-=2.5;
this.distance=seperation;
background.pause();
spike.play();
background.resume();
}}
}



			
if(keep1.it1==1)
{			
	for(var j=0;j<2;j++)
			{
	 var velx=CircleArray[j].distance*ghumao*Math.cos(Math.atan2(CircleArray[j].distance*Math.cos(CircleArray[j].radian),CircleArray[j].distance*Math.sin(CircleArray[j].radian)));
	 var vely=CircleArray[j].distance*ghumao*Math.sin(Math.atan2(CircleArray[j].distance*Math.cos(CircleArray[j].radian),CircleArray[j].distance*Math.sin(CircleArray[j].radian)));
			 
		 velx=(velx);
		 vely=(vely);
	 
			 if(this.color=='red'){
			 
			 if((keep1.x<CircleArray[j].x+CircleArray[j].radius-velx&&keep1.x+60>CircleArray[j].x-CircleArray[j].radius+velx)&&
			 
			 (keep1.y-target[keep1.value].dy<CircleArray[j].y+CircleArray[j].radius-vely&&keep1.y-target[keep1.value].dy+60>CircleArray[j].y-CircleArray[j].radius+vely))
		 {

heart.play();	 


keep1.it1=0;
LIFE++;
}}}
}


		}



else if(seperation<=100&&begining)
{
	seperation++;
	if(seperation<=100)
	ghumao=-0.3;
	if(seperation==100){

begining=0;	

}
}






			this.x=center+this.distance*Math.cos(this.radian);
       this.y=heightt+this.distance*Math.sin(this.radian);
      

console.log();

        
            
            this.Draw();

    }
}}
var CircleArray=[];
var paused=false;



CircleArray.push(new Circle(200,heightt,10,'red',0));
CircleArray.push(new Circle(200,heightt,10,'blue',0+Math.PI));




//types of objects

//Inheritance Function
var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
child.prototype.constructor=child;
};


function Obstacles(x,y,dx,dy,w,h){
    this.rotation=false;
	this.x=x;
	this.color='rgb(255,255,255)';
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.w=w;
    this.h=h;
    this.t=1;
    this.counter=0;
    this.radian=Math.PI/3;
    this.beating='false';
    // this.drawO=function(){
    // }
    // this.updatO=function(){
     
    // }
Obstacles.prototype.updatO=function(){  

// if(this.y<0&&this.dy<0){this.y=this.initialY;this.dy=-this.dy;}
	for(var j=0;j<2;j++)
       {
var A;
        if(this.rotation)A=this.Fx;
        else A=this.x;

var velx=CircleArray[j].distance*ghumao*Math.cos(Math.atan2(CircleArray[j].distance*Math.cos(CircleArray[j].radian),CircleArray[j].distance*Math.sin(CircleArray[j].radian)));
var vely=CircleArray[j].distance*ghumao*Math.sin(Math.atan2(CircleArray[j].distance*Math.cos(CircleArray[j].radian),CircleArray[j].distance*Math.sin(CircleArray[j].radian)));
        
    velx=(velx);
    vely=(vely);

        if(LIFE==0&&!CircleArray[j].power){
        
        if((A-this.dx<CircleArray[j].x+CircleArray[j].radius-velx&&A+this.w+this.dx>CircleArray[j].x-CircleArray[j].radius+velx)&&
        
        (this.y-this.dy<CircleArray[j].y+CircleArray[j].radius-vely&&this.y+this.h+this.dy>CircleArray[j].y-CircleArray[j].radius+vely))
    {
		
	
		this.color=CircleArray[j].color;
ghumao=0;
for(var i=0;i<target.length;i++)
	{target[i].dy=0;target[i].dx=0;}
	window.removeEventListener('keydown',KEYDOWN);
	window.removeEventListener('keyup',KEYUP);
	if(this.rotation==true)this.t=0;

	cancelAnimationFrame(id);
	if(result>sessionStorage.getItem('HIGH')){
	sessionStorage.setItem('HIGH',result);
	c.save();
	c.fillStyle='grey';
	c.textAlign='center';
	c.font='19px Georgia';
	c.fillText('Congratulation On Making New Record:)',200,300);
	c.restore();
}
background.pause();

		blast.play();
dead.play();
c.save()
c.textAlign='center';
c.fillStyle='white';
c.fillText('GAME OVER!!! :(',200,390);
c.restore();
document.getElementById('playagain').style.visibility='visible';
	

}

	}
	else {

		if((A-this.dx<CircleArray[j].x+CircleArray[j].radius-velx&&A+this.w+this.dx>CircleArray[j].x-CircleArray[j].radius+velx)&&
        
        (this.y-this.dy<CircleArray[j].y+CircleArray[j].radius-vely&&this.y+this.h+this.dy>CircleArray[j].y-CircleArray[j].radius+vely))
    {
		this.color=CircleArray[j].color;

blast.play();
    //  setTimeout(function(){this.y=window.innerHeight+100},1);
if(CircleArray[j].power)
{
CircleArray[j].power=false;
}
else
	{LIFE--;
	}
this.noted=1;
this.y=window.innerHeight+100;

	}



	}
}

    if(this.t&&this.rotation){this.radian+=0.05;}
if(this.x<=0||this.x+this.w>=400)
this.dx=-this.dx;

    this.drawO();
this.x+=this.dx;
this.y+=this.dy;
}

Obstacles.prototype.drawO=function(){
	
	c.fillStyle=this.color;


    if(this.counter == 45) {
        if(!this.beating) {
            this.x -= 1;
            this.y -= 1;
            this.w += 2;
            this.h += 2;
            this.beating = true;
            this.counter = 0;
        }
        else{
            this.x += 1;
            this.y += 1;
            this.w -= 2;
            this.h -= 2;
            this.beating = false;
            this.counter = 0;
        }
    }
    this.counter++;
    if(this.rotation){
        c.save();
        c.translate(this.x+(this.w*0.5),this.y+(0.5*this.h));
        c.rotate(this.radian);
        c.fillRect(-this.w/2,-this.h/2,this.w,this.h);
        c.restore();



    this.Fx = -0.5*this.w*Math.cos(-this.radian) + 0.5*this.h*Math.sin(-this.radian)+this.x+this.w*0.5;  }

    else
c.fillRect(this.x,this.y,this.w,this.h);
}}





//rotating object

var ss=new Obstacles(100,100,0,7,200,40);
ss.rotation=true;

// //     c.save();
// // c.translate(200,this.y+20);
// // c.rotate(this.radian);
 
// //   if(this.t)
// //     this.radian+=0.04;


// //  c.restore();
// //  alert(this.Fx);

// }}




//Square Obstacle
var SquareC = function(dy, y) {
	this.y = y;
	this.score=20;
	this.w = 80;
	this.x = 200;

	this.h = 80;
	this.dx=0;
	this.dy = dy;
	this.noted=0;
	this.color='rgb(255,255,255)';
	this.initialX = this.x;
	this.initialY = this.y;
	this.onScreen = false;
	this.spd = 5;	
	this.counter = 0;
	this.beating = false;
	
}
inheritsFrom(SquareC, Obstacles);

//Square Obstacle Center Moving Right
var SquareCRight = function(dy, y) {
	this.x = 200;
	this.score=15;
	this.y = y;
	this.w = 80;
	
	this.h = 80;
	this.dx = 0.3;
	this.color='rgb(255,255,255)';
	this.noted=0;
	this.dy = dy;
	this.initialX = this.x;
	this.initialY = this.y;
	this.onScreen = false;

	this.spd = 5;	
	this.counter = 0;
	this.beating = false;
	
}
inheritsFrom(SquareCRight, Obstacles);

//Square Obstacle Center Moving Left
var SquareCLeft = function(dy, y) {
	this.x = 200;
	this.score=15;
	this.y = y;
	this.w = 80;

	this.color='rgb(255,255,255)';
	this.h = 80;
	this.dx = -0.45;
	this.dy = dy;
	this.noted=0;
	this.initialX = this.x;
	this.initialY = this.y;
	this.onScreen = false;
	
	this.spd = 5;	
	this.counter = 0;
	this.beating = false;
	
}
inheritsFrom(SquareCLeft, Obstacles);

//Square Obstacle Center Moving Down
var SquareCDown = function(dy, y) {
	this.y = y;
	this.w = 80;

	this.x = 200;

	this.color='rgb(255,255,255)';
	this.h = 80;
	this.score=25;
	this.dx = 0;
	this.dy = dy+1;
	this.initialX = this.x;
	this.noted=0;
	this.initialY = this.y;
	this.onScreen = false;
	
	this.spd = 5;	
	this.counter = 0;
	this.beating = false;
	
}
inheritsFrom(SquareCDown, Obstacles);


//Rectangle Upright Right
var RectangleUprightR = function(dy, y) {
	this.x = 280;
	this.y = y;
	this.w = 30;
	this.h = 150;
	this.dx = 0;
	this.dy = dy;
	this.score=10;
	this.noted=0;
	this.color='rgb(255,255,255)';
	this.initialX = this.x;
	this.initialY = this.y;
	
	this.spd = 5;
	this.counter = 0;
	this.beating = false;
this.onScreen=false;	
 };
inheritsFrom(RectangleUprightR, Obstacles);


//Rectangle Upright Left
var RectangleUprightL = function(dy, y) {
	this.x = 100;
	this.y = y;
	this.w = 30;
	this.h = 150;
	this.color='rgb(255,255,255)';
	this.dx = 0;
	this.dy = dy;
	this.initialX = this.x
	this.noted=0;
	this.score=10;

	this.initialY = this.y;
	
	this.spd = 5;
	this.counter = 0;
	this.beating = false;
this.onScreen=false;	
	
};
inheritsFrom(RectangleUprightL, Obstacles);


//Rectangle Horizontol Center
var RectangleHorzC = function(dy, y) {
	this.x = 150;
	this.y =  y;
	this.w = 70;
	this.h = 30;
	this.dx = 0;
	this.dy = dy;
	this.score=30;

	this.initialX = this.x;
	this.noted=0;
	this.color='rgb(255,255,255)';
	this.initialY = this.y;
	
	this.spd = 5;
	this.counter = 0;
	this.beating = false;
	this.onScreen=false;	
	
};
inheritsFrom(RectangleHorzC, Obstacles);

//Rectangle Horizontol Center Moving Right
var RectangleHorzCRight = function(dy, y) {
	this.x = 150;
	this.y =  y;
	this.noted=0;
	this.score=40;
	this.onScreen=false;	
	
	this.w = 70;
	this.h = 30;
	this.dx = 0.5;
	this.dy = dy;
	this.initialX = this.x;
	this.initialY = this.y;
	this.color='rgb(255,255,255)';
	
	this.spd = 5;
	this.counter = 0;
	this.beating = false;
	
};
inheritsFrom(RectangleHorzCRight, Obstacles);

//Rectangle Horizontol Center Moving Left
var RectangleHorzCLeft = function(dy, y) {
	this.x = 150;
	this.score=20;
	this.y =  y;
	this.w = 70;
	this.h = 30;
	this.onScreen=false;	
	this.dx = -0.5;
	this.dy = dy;
	this.initialX = this.x;
	this.noted=0;
	this.initialY = this.y;
	
	this.color='rgb(255,255,255)';
	this.spd = 5;
	this.counter = 0;
	this.beating = false;
	
};
inheritsFrom(RectangleHorzCLeft, Obstacles);

//Rectangle Horizontol Center Moving Down
var RectangleHorzCDown = function(dy, y) {
	this.y =  y;
	this.score=20;
	this.w = 80;
	this.x = 200;

	this.noted=0;
	this.h = 30;
	this.dx = 0;
	this.dy = dy+1;
	this.color='rgb(255,255,255)';
	this.initialX = this.x;
	this.initialY = this.y;
	
	this.spd = 5;
	this.onScreen=false;	
	this.counter = 0;
	this.beating = false;
	
};
inheritsFrom(RectangleHorzCDown, Obstacles);

//Rectangle Horizontol Left
var RectangleHorzL = function(dy, y) {
	this.x = 0;
	this.y =  y;
	this.score=20;
	this.w = 200;
	this.h = 30;
	this.dx = 0;
	this.color='rgb(255,255,255)';
	this.noted=0;
	this.onScreen=false;	
	this.dy = dy;
	this.initialX = this.x;
	this.initialY = this.y;
	
	this.spd = 5;
	this.counter = 0;
	this.beating = false;
	
};
inheritsFrom(RectangleHorzL, Obstacles);

//Rectangle Horizontol Left Moving Right
var RectangleHorzLRight = function(dy, y) {
	this.x = 0;
	this.y =  y;
	this.w = 170;
	this.h = 30;
	this.noted=0;
	this.dx = 1;
	this.onScreen=false;	
	this.score=20;
	this.color='rgb(255,255,255)';
	this.dy = dy;
	this.initialX = this.x;
	this.initialY = this.y;
	
	this.spd = 5;
	this.counter = 	0;
	this.beating = false;
	
};
inheritsFrom(RectangleHorzLRight, Obstacles);

//Rectangle Horizontol Left Moving Down
var RectangleHorzLDown = function(dy, y) {
	this.x = 0;
	this.y =  y;
	this.w = 200;
	this.onScreen=false;	
	this.h = 30;
	this.dx = 0;
	this.noted=0;
	this.score=20;
	this.dy = dy+1;
	this.initialX = this.x;
	this.color='rgb(255,255,255)';
	this.initialY = this.y;

	this.spd = 5;
	this.counter = 0;
	this.beating = false;
	
};
inheritsFrom(RectangleHorzLDown, Obstacles);

//Rectangle Horizontol Right
var RectangleHorzR = function(dy, y) {
	this.x = 200;
	this.y =  y;
	this.w = 200;
	this.h = 30;
	this.color='rgb(255,255,255)';
	this.dx = 0;
	this.dy = dy;
	this.onScreen=false;	
	this.score=20;
	this.noted=0;
	this.initialX = this.x;
	this.initialY = this.y;
	
	this.spd = 5;
	this.counter = 0;
	this.beating = false;
	
};
inheritsFrom(RectangleHorzR, Obstacles);

//Rectangle Horizontol Right Moving Left
var RectangleHorzRLeft = function(dy, y) {
	this.x = 200;
	this.y =  y;
	this.w = 170;
	this.h = 30;
	this.color='rgb(255,255,255)';
	this.noted=0;
	this.dx = -1;
	this.score=20;
	this.dy = dy;
	this.initialX = this.x;
	this.onScreen=false;	
	this.initialY = this.y;
	
	this.spd = 5;
	this.counter = 0;
	this.beating = false;
	
};
inheritsFrom(RectangleHorzRLeft, Obstacles);

//Rectangle Horizontol Right Moving Down
var RectangleHorzRDown = function(dy, y) {
	this.x = 200;
	this.y =  y;
	this.w = 200;
	this.h = 30;
	this.score=20;
	this.noted=0;
	this.color='rgb(255,255,255)';
	this.dx = 0;
	this.onScreen=false;	
	this.dy = dy+1;
	this.initialX = this.x;
	this.initialY = this.y;

	this.spd = 5;
	this.counter = 0;
	this.beating = false;
	
};
inheritsFrom(RectangleHorzRDown, Obstacles);

var target=[];

//Very Important
var object=new Obstacles(100,100,0,2,100,50);

Leveln=-1;
function Upgrade(){Leveln++;
// // firing=setInterval(fire,10);

// fire();
	target.splice(0,target.length);
for(var j=0;j<level[Leveln].OBS.length;j++)
{
 target.push(getObstacle(level[Leveln].OBS[j].code,level[Leveln].SPD,level[Leveln].OBS[j].IY));
}
console.log(target[0]);


keep.it=1;
keep1.it1=1;
}
Upgrade();

// var ss=new rotatingObjects;
// target.push(ss);
var box=document.getElementById('box');
var id;
 result=0;
var levelTitle=document.createElement('p');
levelTitle.id='level-title';
var levelMsg=document.createElement('p');
levelMsg.id='level-msg';
levelTitle.style.color='red';
levelMsg.style.color='red';
levelTitle.style.marginTop='-30rem';
levelMsg.style.marginTop='-25rem';

function runningCircle()
{ 

    id=requestAnimationFrame(runningCircle);
    

    c.beginPath();  
   c.strokeStyle='rgba(255,255,255,0.09)';
if(seperation>0)
  { c.arc(center,heightt,seperation,0,Math.PI*2,true);
   c.closePath();
   c.stroke();
   heightt-=0.015*Leveln;
  }
  else{
	{
		cancelAnimationFrame(id);
		window.removeEventListener('keydown',KEYDOWN);
		window.removeEventListener('keyup',KEYUP);			
		if(HIGHSCORE<result){
	sessionStorage.setItem('HIGH',result);
	c.save();	
	c.fillStyle='grey';
	c.textAlign='center';
	c.font="16px Georgia";
	c.fillText("Congratualation For Making New Record:)",200,320);
c.restore();		
}

	c.save();	
	c.fillStyle='grey';
	c.textAlign='center';
	c.font="16px Georgia";
	c.fillText("Congratualation You've completed the GAmE",200,300);
document.getElementById('playagain').style.visibility='visible';
	c.restore();	
}}
//    seperation=seperation-0.009*Leveln;



c.fillStyle='rgba(0,0,0,0.16)';
c.fillRect(0,0,window.innerWidth,window.innerHeight);

if(Leveln<=5&&seperation>=100){
var j;
   for(j=0;j<target.length;j++)
   {target[j].updatO();


	if((target[j].y>=window.innerHeight+10)&&!target[j].noted)
    {
result=result+target[j].score;
target[j].noted=1;
	}

}


	if(keep.it==1)
	{
	// console.log('coming');
		// &&keep.it==1
	c.drawImage(img,170,target[Math.round(target.length/2)].y+100,60,60);
	keep.value=Math.round(target.length/2);
	keep.x=170;
	keep.y=target[Math.round(target.length/2)].y+100;
	}


	if(keep1.it1==1)
	{
	// console.log('coming');
		// &&keep.it==1
	c.drawImage(img1,140,target[target.length-2].y+100,60,60);
	keep1.value=target.length-2;
	keep1.x=140;
	keep1.y=target[target.length-2].y+100;
	}




if(target[j-1].y>window.innerHeight+20)
{Upgrade();
}


if(target[0].y>0&&target[0].y<5)
puttingData();
else if(target[0].y>=window.innerHeight*0.9+0.2*Leveln)
{clearInterval(data);}
if(new Date()-d1>2000)
{clearInterval(instruct);}
}
else {seperation-=1;
	if(!begining)
	{background.pause();
	clear.play();
	}
	window.removeEventListener('keydown',KEYDOWN);
	window.removeEventListener('keyup',KEYUP);
	ghumao=0.5;

}

CircleArray[0].updat();
CircleArray[1].updat();


c.fillStyle='yellow';
    c.font = "18px Georgia";
    c.fillText("SCORE: "+result, 10, 20);
   
    c.font = "18px Georgia";
    c.fillText("LEVEL: "+(1+Leveln), 160, 20);
  
    c.font = "18px Georgia";
	c.fillText("LIFE: "+LIFE, 300, 20);
	c.save();
	c.textAlign='center';
   c.fillStyle='white';
   c.fillText('HiGh Score: '+(+sessionStorage.getItem('HIGH')),200,595);
   c.restore();
	levelTitle.innerHTML = level[Leveln].TITLE;
	levelMsg.innerHTML = level[Leveln].MSG;


}

 runningCircle();    
 var d1;
var data;
var gameplay=true;
function puttingData(){
data=setInterval(function(){

	c.font = "18px Georgia";
	c.save();
	c.textAlign = "center"; 
	c.fillText(levelTitle.innerHTML, 200, 300);
	c.font = "18px Georgia";
	c.fillText(levelMsg.innerHTML, 200, 320);
	c.restore();

},50);}

function instruction()
{  d1=new Date();
	instruct=setInterval(function(){
		c.save();
		c.fillStyle='red';

		c.font = "18px Georgia";
		c.textAlign = "center"; 

		c.fillText('Use Left Arrow & Right Arrow to Rotate.',200,370);
		c.font = "15px Georgia";

		c.fillText('Space to Pause And Resume Game',200,350);
		c.restore();

	},70);
}
instruction();

// function fire()
// { 
// 	// alert(target);
// 	firing=setInterval(function(){
// 	}


// fire();






window.addEventListener('keydown',function(event){
	// this.alert(event.keyCode);
	if(event.keyCode==32&&gameplay)
	{cancelAnimationFrame(id);gameplay=false;
		background.pause();
pause.play();
	
	}
	
	else if(event.keyCode==32&&!gameplay)
	{runningCircle();gameplay=true;
background.resume();
}
});







}










