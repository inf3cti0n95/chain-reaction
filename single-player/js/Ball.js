function Ball(x,y){
	this.color = color;
	this.radius = 15;
	this.x = random(x+this.radius,x+50-this.radius);
	this.y = random(y+this.radius,y+50-this.radius);
}

Ball.prototype.drawBall = function(color){
	if(color !== undefined)
		this.color = color;
	fill(this.color);
	stroke(this.color);
	ellipse(this.x,this.y,this.radius)
}