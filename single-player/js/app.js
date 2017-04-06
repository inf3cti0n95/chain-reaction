let grid;
let colors = ["blue","green"] ;
let color="blue";
let i =1;
function setup(){
	createCanvas(300,450);
	background(0);
	grid = new Grid(color);
}

function draw() {
	clear();
	grid.drawGrid(color);
	grid.boxes.forEach((box)=>{
		box.drawBall()
	})
}

function mouseClicked() {
	if(mouseX > width || mouseY > height){
		return;
	}
	let pos = Box.getPosition(mouseX,mouseY)
	let box = grid.getBox(pos.x,pos.y)
	
	console.log(box.maxBalls)
	
	if(color === box.color || box.color === ""){
		logic(box);
	color=colors[i%colors.length];
	i++;
	}
	
	
	
}


function logic(box){
	let sideBoxes = [];
	if(box.isBoxFull()){
		box.balls = [];
		if(box.posX-1 >=0){
			sideBoxes.push(grid.getBox(box.posX-1,box.posY))
		}
		if(box.posX+1 <=5){
			sideBoxes.push(grid.getBox(box.posX+1,box.posY))
		}
		if(box.posY-1 >=0){
			sideBoxes.push(grid.getBox(box.posX,box.posY-1))
		}
		if(box.posY+1 <=9){
			sideBoxes.push(grid.getBox(box.posX,box.posY+1))
		}
	}
	else{
		// if()
		{
			box.addBall(color);
			
		}
	}
	sideBoxes.forEach((box)=>{
		logic(box,color);
	})
}