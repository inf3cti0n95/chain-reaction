function Box(posX, posY,color) {
	this.posX = posX;
	this.posY = posY;
	this.x = (posX)*width/6;
	this.y = (posY)*height/9;
	this.balls = [];
	this.maxBalls = maxBalls(this.posX,this.posY);
	this.width = width/6;
	this.height = height/9;
	this.color="";
}

Box.prototype.drawBall=function(color) {
	this.balls.forEach((ball)=>{
		ball.drawBall(this.color)
	});
}

Box.prototype.addBall = function (color) {
	this.color = color;
	if(this.isBoxFull())
	{
		this.balls = [];
		this.color = "";
	}
	else
		this.balls.push(new Ball(this.x,this.y))
}

Box.prototype.drawBoxBorders = function(color) {
	stroke(color);
	fill("rgba(0,0,0,0)");
	if(this.x+this.width >= width)
		this.width -= 1;
	if(this.y+this.height >= height)
		this.height -=1;
	rect(this.x,this.y,this.width,this.height);
	
}

Box.getPosition = function(x,y){
	return {
		x: Math.floor(x/(width/6)),
		y: Math.floor(y/(height/9))
	};
}

function maxBalls(posX, posY){
	let maxBalls;
	if(posX === 0 || posX === 5){
		maxBalls = 2;
		if(posY === 0 || posY === 8){
			maxBalls = 1;
		}
	}else if(posY === 0 || posY === 8){
		maxBalls = 2;
		if(posX === 0 || posX === 5){
			maxBalls = 1;
		}
	}else{
		maxBalls = 3;
	}
	console.log(maxBalls, "max")
	return maxBalls;
}

Box.prototype.isBoxFull = function(){
	return this.full = this.balls.length >= this.maxBalls;
}