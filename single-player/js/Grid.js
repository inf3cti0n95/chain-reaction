function Grid(color) {
	this.color = color;
	this.boxes = getBoxes(this.color);
	console.log(this.boxes)
}

Grid.prototype.drawGrid = function (color) {
	if(color !== undefined){
		this.color = color;
	}
	this.boxes.forEach((box)=>{
		box.drawBoxBorders(this.color);
	})
	
}

function getBoxes(color) {
	let temp=[];
	for(let i=0; i<6; i++){
		for(let j=0; j< 9; j++){
			temp.push(new Box(i,j,color))
			
		}
	}
	return temp;
}

Grid.prototype.getBox = function(x,y){
	return this.boxes.filter((box)=>{
		return (box.posX === x && box.posY === y)
	})[0];
}